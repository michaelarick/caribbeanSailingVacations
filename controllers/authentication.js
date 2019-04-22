const jwt = require("jwt-simple");
const User = require("../models/user");
const keys = require("../config/keys");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.sessionSecret);
}

exports.signin = function(req, res, next) {
  const { email, password } = req.body;
  User.findOne({ email }, "email password")
    .then(user => {
      if (!user) {
        return res.status(401).send({ message: "Wrong Username or password" });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch) {
          return res
            .status(401)
            .send({ message: "Wrong Username or password" });
        }
        res.send({ token: tokenForUser(req.body.email) });
      });
    })
    .catch(err => console.log(err));
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password " });
  }
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: "Email in use" });
    }

    const user = new User({
      email: email,
      password: password,
      isAdmin: false
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
};

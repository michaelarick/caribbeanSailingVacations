const router = require("express").Router();
const boatRoutes = require("./boats");
const userRoutes = require("./users");

router.use("/boats", boatRoutes);
router.use("/users", userRoutes);

module.exports = router;

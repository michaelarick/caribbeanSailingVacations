const router = require("express").Router();
const boatRoutes = require("./boats");

router.use("/boats", boatRoutes);


module.exports = router;

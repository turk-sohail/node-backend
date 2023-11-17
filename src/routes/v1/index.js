const router = require("express").Router();
const { InfoController } = require("../../controllers");
const { AirplaneController } = require("../../controllers");
const airplaneRouter = require("./airplane-router");


router.get("/info", InfoController.info);
router.use("/airplanes", airplaneRouter);


module.exports = router;
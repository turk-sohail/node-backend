const router = require("express").Router();
const { InfoController } = require("../../controllers");
const airplaneRouter = require("./airplane-router");
const cityRouter = require("./city-router");


router.get("/info", InfoController.info);
router.use("/airplanes", airplaneRouter);
router.use("/cities", cityRouter);


module.exports = router;
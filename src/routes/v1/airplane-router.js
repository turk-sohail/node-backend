const router = require("express").Router();
const { AirplaneController } = require("../../controllers");
const { ValidateCreateRequest } = require("../../middlewares");


router.post("/",
    ValidateCreateRequest.validateCreateRequest,
    AirplaneController.createAirplane
)
router.get("/",
    AirplaneController.getAirplanes
)


module.exports = router;
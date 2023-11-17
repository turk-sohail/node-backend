const router = require("express").Router();
const { AirplaneController } = require("../../controllers");
const { ValidateCreateRequest } = require("../../middlewares");


router.post("/",
    ValidateCreateRequest.validateCreateRequest,
    AirplaneController.createAirplane
)


module.exports = router;
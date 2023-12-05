const router = require("express").Router();
const { CityController } = require("../../controllers");
const { ValidateCityCreate } = require("../../middlewares");

router.post("/",
    ValidateCityCreate.validateCreateRequest,
    CityController.createCity);


module.exports = router;
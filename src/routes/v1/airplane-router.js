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
router.get("/:id",
    AirplaneController.getAirplane

)

router.delete("/:id",
    AirplaneController.deleteAirplane
)

router.patch("/:id",
    AirplaneController.updateAirplane

)


module.exports = router;
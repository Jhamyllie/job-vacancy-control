const express = require("express");

const router = express.Router();
const controller = require("../controllers/vacancyController");

router.get("/vacancies", controller.getAll);
router.post("/add", controller.addNewvacancy);
router.get("/:id", controller.getById);
router.patch("/update/:id", controller.updateVacancy);
router.delete("/delete/vacancy/:id", controller.deleteVacancy);

module.exports = router;

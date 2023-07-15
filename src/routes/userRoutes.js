const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/user", controller.createUser);
router.get("/", controller.getAllUser);
router.delete("/delete/:id", controller.deleteUserById);
router.patch("/:id", controller.updateUsers);

module.exports = router;
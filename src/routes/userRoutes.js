const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/create", controller.createUser);
router.get("/", controller.getAllUsers);
router.delete("/delete/:id", controller.deleteUserById);
router.patch("/:id", controller.updateUsers);
router.post("/login", controller.login);

module.exports = router;
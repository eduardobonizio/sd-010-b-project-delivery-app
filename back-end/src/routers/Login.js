const express = require("express");
const { loginController } = require("../controllers/loginController");

const router = express.Router();
// router.route("/").post(loginController);

router.post("/", loginController);

module.exports = router;

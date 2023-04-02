const express = require("express");
const router = express.Router();
const listController = require("../controller/listController");

router.post("/user/add", listController.add);

module.exports = router;
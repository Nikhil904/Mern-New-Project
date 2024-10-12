const express = require('express');
const router = express.Router();
const user = require("../Controller/users")

router.post("/customer_register",user.customer_register)

module.exports = router;
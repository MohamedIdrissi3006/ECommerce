const express = require("express");
const {registerUser } = require("../controllers/userController");
const {authUser } = require("../controllers/userController");
// const { protect } = require("../middleware/authMiddleware");
const User = require('../models/userModel'); // Import the User model
const bcrypt = require('bcrypt');

const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);

module.exports = router;
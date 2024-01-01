const express = require("express");
const {registerUser } = require("../controllers/userController");
const {authUser } = require("../controllers/userController");
const {verifyEmail } = require("../controllers/userController");
// const { protect } = require("../middleware/authMiddleware");
const User = require('../models/userModel'); // Import the User model
const bcrypt = require('bcrypt');
const passport = require('passport');
require('../auth');
const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.post("/verify-email", verifyEmail);
module.exports = router;
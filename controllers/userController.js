const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const e = require("express");
const registerUser = asyncHandler(async (req, res) => {


  const { firstName, lastName, email, tel, password, pic } = req.body;

  if (!firstName || !lastName || !tel || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");

  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const verificationToken = crypto.randomBytes(20).toString('hex');
  const user = await User.create({
    firstName,
    lastName,
    email,
    tel,
    password,
    pic,
    emailToken: verificationToken

  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      //   token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }

});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});


const verifyEmail = async (req, res) => {

  try {
    const emailToken = req.body.emailToken;
    if (!emailToken) return res.status(404).json("Email token not found......");
    const user = await User.findOne({ emailToken });
    if (user) {
      user.emailToken = null
      user.isVerfied = true;
      await user.save();
      const token = generateToken(user._id);
      res.json({
        _id: user._id,
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        pic: user.pic,
        token: token,
        isVerfied: user?.isVerfied
      });
    } else {
      res.status(404).json("Email verfication failed......");
    }
  }
  catch (error) {
    console.log(error)
    res.status(500).json(error.message);
  }

};


module.exports = { registerUser, authUser, verifyEmail };
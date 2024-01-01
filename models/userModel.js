const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },

    email: { type: String, unique: true, required: true },
    tel: { type: String, unique: false, required: false },
    password: { type: String, required: false },
    pic: {
      type: String,
      required: false,
      default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isVerfied: { type: Boolean, required: true,  default: false },
    emailToken:{ type: String, required: false },
  },
  { timestamps: true } // Fix the typo here
);




userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model("User", userSchema);


module.exports = User;
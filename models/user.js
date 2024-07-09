const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
        type: String,
        default: '/images/user.png',
    },
    role:{
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;

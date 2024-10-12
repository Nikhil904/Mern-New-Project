const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;

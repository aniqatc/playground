const User = require('../models/userModel');
const express = require('express');
const router = express.Router();

router.post('/create', createNewUser);

async function createNewUser(req, res) {
  try {
    const { userId } = req.body;
    let user = await User.findOne({ userId });
    if (user) {
      return res.status(200).json(user);
    }

    user = new User({ userId });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: `Error creating user: ${error.message}` });
  }
}

module.exports = router;

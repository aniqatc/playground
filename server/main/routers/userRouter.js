const { User } = require('../models/userModel');
const express = require('express');
const router = express.Router();

router.route('/:userId/').get(fetchUserDetails);

async function fetchUserDetails(req, res) {
	try {
		const userId = req.params.userId;
		let user = await User.findOne({ userId: userId });

		if (!user) {
			user = await createNewUser(userId);
			return res.status(200).json({ user });
		}

		res.status(200).json({ user });
	} catch (error) {
		res.status(500).json({
			error: 'An error occurred while getting user details.',
		});
	}
}

async function createNewUser(userId) {
	const user = new User({ userId });
	await user.save();
	return user;
}

module.exports = router;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userId: {
		type: String,
		unique: true,
		required: true,
		index: true,
	},
});

const User = mongoose.model('Users', UserSchema);

module.exports = { User };

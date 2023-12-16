const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
	widgetId: {
		type: String,
		required: true,
	},
	likeCount: {
		type: Number,
		default: 0,
	},
});

const Likes = mongoose.model('Likes', LikeSchema);

module.exports = { Likes };

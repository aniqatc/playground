const { Likes } = require('../models/likeModel');
const express = require('express');
const router = express.Router();

router.route('/:widgetId/').get(getCurrentLikes).post(updateLikes);

async function getCurrentLikes(req, res) {
	try {
		const widgetId = req.params.widgetId;
		let widget = await Likes.findOne({ widgetId: widgetId });

		res.status(200).json({
			widgetId: widget.widgetId,
			likeCount: widget.likeCount,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: 'An error occurred while getting likes.' });
	}
}

async function updateLikes(req, res) {
	try {
		const widgetId = req.params.widgetId;
		let widget = await Likes.findOne({ widgetId: widgetId });

		if (!widget) {
			widget = new Likes({
				widgetId: widgetId,
				likeCount: 1,
			});
		} else {
			widget.likeCount += 1;
		}

		await widget.save();
		res.status(201).json({ likeCount: widget.likeCount });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: 'An error occurred while updating likes.' });
	}
}

module.exports = router;

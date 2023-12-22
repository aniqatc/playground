const mongoose = require('mongoose');
const { User } = require('../models/userModel');
const { createNewUser } = require('../routers/userRouter');

async function addWidgetData(userId, widgetType, widgetData) {
	let user = await User.findOne({ userId: userId });

	if (!user) {
		user = await createNewUser(userId);
	}

	const WidgetModel = mongoose.model(widgetType);
	widgetData.userRef = user._id;
	const widget = new WidgetModel(widgetData);
	await widget.save();
}

export { addWidgetData };

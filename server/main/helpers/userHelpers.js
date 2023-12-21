const mongoose = require('mongoose');
const { User } = require('../models/userModel');

async function addWidgetDataToUser(userId, widgetId, widgetType, widgetData) {
	const WidgetModel = mongoose.model(widgetType);
	const widget = new WidgetModel(widgetData);
	await widget.save();

	const user = await User.findById(userId);
	user.widgets.push({ widgetId: widgetId, widgetType: widgetType, widgetRef: widget._id });
	await user.save();
}

export { addWidgetDataToUser };

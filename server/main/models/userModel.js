const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userId: {
		type: String,
		unique: true,
		required: true,
	},
	widgets: [
		{
			widgetId: String,
			widgetType: String,
			widgetRef: {
				type: mongoose.Schema.Types.ObjectId,
				refPath: 'widgets.widgetType',
			},
		},
	],
});

const User = mongoose.model('Users', UserSchema);

module.exports = { User };

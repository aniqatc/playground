const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
	// custom fields specific to the widget
	task: { type: String, required: true },
	dueDate: { type: Date, default: Date.now },
	priority: { type: String, enum: ['low', 'medium', 'high', 'untagged'], default: 'untagged' },
	isCompleted: { type: Boolean, default: false },
	isArchived: { type: Boolean, default: false },
	// all widget-specific general fields
	widgetId: { type: String, required: true },
	widgetType: { type: String, default: 'ToDo' },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	// reference to specific user document
	userRef: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users',
		required: true,
	},
});

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;

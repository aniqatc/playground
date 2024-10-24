const express = require('express');
const router = express.Router();
const ToDo = require('./toDoModel');
const User = require('../../main/models/userModel');

// Create a new todo
router.post('/', async (req, res) => {
	try {
		const { task, dueDate, priority, userRef } = req.body;

		// Find the user by their userRef (which is a unique identifier, not the ObjectId)
		const user = await User.findOne({ userId: userRef });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const newTodo = new ToDo({
			task,
			dueDate: dueDate || Date.now(),
			priority: priority,
			userRef: user._id,
			widgetId: '04',
		});

		const savedTodo = await newTodo.save();
		res.status(201).json(savedTodo);
	} catch (error) {
		console.error('Error creating todo:', error);
		res.status(500).json({ message: `Error creating todo: ${error.message}` });
	}
});

// All todos for a specific user
router.get('/:userId', async (req, res) => {
	try {
		const userId = req.params.userId;
		const user = await User.findOne({ userId: userId });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const todos = await ToDo.find({ userRef: user._id });

		if (!todos || todos.length === 0) {
			return res.status(404).json({ message: 'No To-Dos found for this user' });
		}

		res.status(200).json(todos);
	} catch (error) {
		console.error('Error retrieving todo list:', error);
		res.status(500).json({ message: 'Error retrieving todo list' });
	}
});

module.exports = router;

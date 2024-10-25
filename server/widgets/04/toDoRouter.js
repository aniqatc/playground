const express = require('express');
const router = express.Router();
const ToDo = require('./toDoModel');
const User = require('../../main/models/userModel');

// Create a new todo
router.post('/', async (req, res) => {
	try {
		const { task, dueDate, priority, userRef } = req.body;
		const user = await User.findOne({ userId: userRef });
		const newTodo = new ToDo({
			task,
			dueDate: dueDate || Date.now(),
			priority: priority,
			userRef: user._id, // ObjectId in DB
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
		const todos = await ToDo.find({ userRef: user._id });

		res.status(200).json(todos);
	} catch (error) {
		console.error('Error retrieving todo list:', error);
		res.status(500).json({ message: 'Error retrieving todo list' });
	}
});

// Update completion status
router.patch('/complete/:todoId', async (req, res) => {
	try {
		const { todoId } = req.params;
		const { isCompleted } = req.body;

		const updatedTodo = await ToDo.findByIdAndUpdate(todoId, { isCompleted }, { new: true });
		res.status(200).json(updatedTodo);
	} catch (error) {
		res.status(500).json({ message: 'Error updating todo' });
	}
});

// Update archive status
router.patch('/archive/:todoId', async (req, res) => {
	try {
		const { todoId } = req.params;
		const { isArchived } = req.body;

		const updatedTodo = await ToDo.findByIdAndUpdate(todoId, { isArchived }, { new: true });
		res.status(200).json(updatedTodo);
	} catch (error) {
		res.status(500).json({ message: 'Error updating todo' });
	}
});

// Delete todo
router.delete('/:todoId', async (req, res) => {
	const { todoId } = req.params;
	const deletedTodo = await ToDo.findByIdAndDelete(todoId);
	res.status(200).json({ message: 'To-Do deleted successfully' });
});

module.exports = router;

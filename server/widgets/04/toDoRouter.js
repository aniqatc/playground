const express = require('express');
const router = express.Router();
const ToDo = require('./toDoModel');
const User = require('../../main/models/userModel');

// Create a new todo
router.post('/', async (req, res) => {
	try {
		const { task, dueDate, priority, isArchived, isCompleted, userRef } = req.body;
		const user = await User.findOne({ userId: userRef });
		const newTodo = new ToDo({
			task,
			dueDate: dueDate || Date.now(),
			priority: priority,
			isArchived,
			isCompleted,
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
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		const todos = await ToDo.find({ userRef: user._id });
		res.status(200).json(todos);
	} catch (error) {
		console.error('Error retrieving todo list:', error);
		res.status(500).json({ message: 'Error retrieving todo list' });
	}
});

// Get todo by todoId
router.get('/find/:todoId', async (req, res) => {
	try {
		const { todoId } = req.params;
		const todo = await ToDo.findById(todoId);
		if (!todo) {
			return res.status(404).json({ message: 'Todo not found' });
		}
		res.status(200).json(todo);
	} catch (error) {
		console.error('Error retrieving specified task:', error);
		res.status(500).json({ message: 'Error retrieving specified task' });
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

// Update date or task text
router.patch('/update/:todoId', async (req, res) => {
	try {
		const { todoId } = req.params;
		const newData = {};

		if (req.body.task) newData.task = req.body.task;
		if (req.body.dueDate) newData.dueDate = req.body.dueDate;

		const updatedTodo = await ToDo.findByIdAndUpdate(todoId, newData, { new: true });
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

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

// Default todos for new users
router.post('/create', async (req, res) => {
	const { userId } = req.body;
	let user = await User.findOne({ userId });
	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}

	const existingToDos = await ToDo.find({ userRef: user._id });
	if (existingToDos.length > 0) {
		return res.status(200).json({ message: 'User already has to-dos' });
	}

	const defaultToDos = [
		{
			task: 'Play around with the new to-do widget in the playground',
			dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
			priority: 'high',
			isCompleted: false,
			userRef: user._id,
			widgetId: '04',
		},
		{
			task: 'View the GitHub repository for this website and provide feedback',
			dueDate: new Date(new Date().setDate(new Date().getDate() + 10)),
			priority: 'low',
			isCompleted: false,
			userRef: user._id,
			widgetId: '04',
		},
		{
			task: 'Create example tasks for new users to view',
			dueDate: new Date(),
			priority: 'low',
			isCompleted: true,
			userRef: user._id,
			widgetId: '04',
		},
		{
			task: 'Create a digital footprint widget with a map from MapBox',
			dueDate: new Date(),
			priority: 'low',
			isCompleted: true,
			isArchived: true,
			userRef: user._id,
			widgetId: '04',
		},
		{
			task: 'Build a simple scientific and graphic calculator',
			dueDate: new Date(),
			priority: 'low',
			isCompleted: true,
			isArchived: true,
			userRef: user._id,
			widgetId: '04',
		},
	];
	await ToDo.insertMany(defaultToDos);
	res.status(201).json({ message: 'Default To-Dos created for user', defaultToDos });
});

module.exports = router;

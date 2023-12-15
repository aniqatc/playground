require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;
const db = process.env.DB_URI.replace('<PASSWORD>', process.env.DB_PW);

// routers
const likeRouter = require('./server/routers/likeRouter');

// connect widget db
mongoose
	.connect(db)
	.then(() => console.log('Connected to MongoDB Database:', mongoose.connection.db.databaseName));

// middleware
app.use(cors({ origin: 'https://playground.aniqa.dev' }));
app.use(express.json());
app.use('/widget/likes/', likeRouter);

// redirect backend host to frontend
app.use((req, res, next) => {
	if (req.hostname === 'data.playground.aniqa.dev') {
		return res.redirect('https://playground.aniqa.dev');
	}
	next();
});

// server
app.listen(port, () => {
	console.log(`App running on port: ${port}...`);
});

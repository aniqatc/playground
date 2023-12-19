require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const useragent = require('express-useragent');
const app = express();

const port = process.env.PORT || 3000;
const db = process.env.DB_URI.replace('<PASSWORD>', process.env.DB_PW);

// routers & handlers
const likeRouter = require('./server/main/routers/likeRouter');
const ipHandler = require('./server/widgets/03/ipHandler');

// connect widget db
mongoose
	.connect(db)
	.then(() => console.log('Connected to MongoDB Database:', mongoose.connection.db.databaseName));

// middleware
process.env.NODE_ENV === 'production'
	? app.use(cors({ origin: process.env.FRONTEND_HOSTED }))
	: app.use(cors({ origin: process.env.FRONTEND_LOCAL }));
app.use(express.json());
app.use(useragent.express());

// paths
app.use('/widget/likes/', likeRouter);
app.get('/widget/user-data/', ipHandler.collectUserData, ipHandler.getUserInfo);
app.get('/widget/user-map/:theme', ipHandler.collectUserData, ipHandler.getUserMap);

// redirect backend host to frontend
app.use((req, res, next) => {
	if (req.hostname === 'data.playground.aniqa.dev') {
		return res.redirect(process.env.FRONTEND_HOSTED);
	}
	next();
});

// server
app.listen(port, () => {
	console.log(`App running on port: ${port}...`);
	console.log(`Environment: ${process.env.NODE_ENV}`);
});

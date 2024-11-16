require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const useragent = require('express-useragent');
const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DB_URI.replace('<PASSWORD>', process.env.DB_PW);
const cron = require('node-cron');

// connect widget db
mongoose
	.connect(db)
	.then(() => console.log('Connected to MongoDB Database:', mongoose.connection.db.databaseName));

// middleware
console.log(
	'CORS configured for:',
	process.env.NODE_ENV === 'production' ? process.env.FRONTEND_HOSTED : process.env.FRONTEND_LOCAL
);

process.env.NODE_ENV === 'production'
	? app.use(cors({ origin: process.env.FRONTEND_HOSTED }))
	: app.use(cors({ origin: process.env.FRONTEND_LOCAL }));
app.use(express.json());
app.use(useragent.express());

// routers & handlers
const userRouter = require('./server/main/routers/userRouter');
const likeRouter = require('./server/main/routers/likeRouter');
const ipHandler = require('./server/widgets/03/ipHandler');
const toDoRouter = require('./server/widgets/04/toDoRouter');
const marketRouter = require('./server/widgets/05/market/marketRouter');
const currencyRouter = require('./server/widgets/05/currency/currencyRouter');

app.use('/users/', userRouter);
app.use('/likes/', likeRouter);
app.get('/widget/user-ip-data/', ipHandler.collectUserData, ipHandler.getUserInfo);
app.use('/widget/todos/', toDoRouter);
app.use('/widget/markets/', marketRouter);
app.use('/widget/currencies/', currencyRouter);

// widget 5: daily market refresh
const marketData = require('./server/widgets/05/market/marketData');
const currencyData = require("./server/widgets/05/currency/currencyData");
cron.schedule('0 10 * * 1-5', async () => {
	await marketData.updateFeaturedStocks();
	await currencyData.fetchExchangeRate();
}, { timezone: "America/New_York" })

// redirect backend host to frontend
app.use((req, res, next) => {
	if (req.hostname === 'data.playground.aniqa.dev') {
		return res.redirect(process.env.FRONTEND_HOSTED);
	}
	next();
});

// Error-handling middleware
app.use((err, req, res, next) => {
	console.error('Error:', err.stack);
	res.status(500).send('Something went wrong!');
});

// server
app.listen(port, () => {
	console.log(`App running on port: ${port}...`);
	console.log(`Environment: ${process.env.NODE_ENV}`);
});

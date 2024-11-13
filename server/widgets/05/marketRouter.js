const express = require('express');
const router = express.Router();
const marketData = require('./marketData');

// Stocks
router.get('/active', async (req, res) => {
    const stocks = await marketData.getActiveStocks();
    res.json(stocks);
})

// Currencies

module.exports = router;
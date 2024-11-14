const express = require('express');
const router = express.Router();
const marketData = require('./marketData');

// Stocks
router.get('/featured', async (req, res) => {
    const stocks = await marketData.getFeaturedStocks();
    res.json(stocks);
})

router.get('/search/:symbol', async (req, res) => {
    const { symbol } = req.params;
    const stock = await marketData.getIndividualStock(req.params.symbol);
    if (!stock) {
        return res.status(404).json({ message: 'No stock found.' });
    }
    res.json({ stock });
})

// Currencies

module.exports = router;
const express = require('express');
const router = express.Router();
const currencyData = require('./currencyData');

router.get('/all', async (req, res) => {
  const data = await currencyData.fetchCurrencyInfo();
  res.json(data);
});

router.get('/rates', async (req, res) => {
  const data = await currencyData.fetchExchangeRate();
  res.json({
    rates: data.rates || [],
    lastUpdated: data.lastUpdated || new Date().toLocaleString(),
  });
});

module.exports = router;

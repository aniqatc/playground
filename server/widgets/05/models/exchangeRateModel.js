const mongoose = require('mongoose');

const exchangeRateSchema = new mongoose.Schema({
  currencyCode: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ExchangeRate', exchangeRateSchema);

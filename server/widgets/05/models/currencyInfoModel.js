const mongoose = require('mongoose');

const currencyInfoSchema = new mongoose.Schema({
    currencyCode: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    fullName: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
    }
})

module.exports = mongoose.model('CurrencyInfo', currencyInfoSchema);

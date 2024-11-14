const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    price: Number,
    change: Number,
    changePercent: Number,
    volume: Number,
    exchange: String,
    open: Number,
    close: Number,
    yearHigh: Number,
    yearLow: Number,
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Stock', stockSchema);
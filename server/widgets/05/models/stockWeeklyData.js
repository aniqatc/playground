const mongoose = require('mongoose');

const stockWeeklySchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
    },
     data: [{
        date: String,
         close: Number,
     }],
    lastUpdated: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("StockWeekly", stockWeeklySchema);
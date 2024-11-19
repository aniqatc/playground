const mongoose = require('mongoose');

const megaMillionsSchema = new mongoose.Schema({
    drawingDate: { type: Date, required: true, unique: true },
    numbers: [Number],
    megaBall: Number,
    megaplier: Number,
    numberSet: String,
    jackpot: String,
    videoUrl: String,
    nextJackpot: String,
    nextDrawingDate: Date
});

module.exports = mongoose.model('MegaMillions', megaMillionsSchema);
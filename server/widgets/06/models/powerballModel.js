const mongoose = require('mongoose');

const powerballSchema = new mongoose.Schema({
  drawingDate: { type: Date, required: true, unique: true },
  numbers: [Number],
  powerBall: Number,
  multiplier: Number,
  jackpot: String,
  videoUrl: String,
  numberSet: String,
});

module.exports = mongoose.model('Powerball', powerballSchema);

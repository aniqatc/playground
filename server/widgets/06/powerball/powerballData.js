const Powerball = require('../models/powerballModel');

class PowerballData {
    async fetchSearchRange() {
        const start = await Powerball.findOne().sort({ drawingDate: 1}).select('drawingDate');
        const end = await Powerball.findOne().sort({drawingDate: -1}).select('drawingDate');

        return {
            startDate: start.drawingDate.toLocaleDateString(),
            endDate: end.drawingDate.toLocaleDateString()
        }
    }
}

module.exports = new PowerballData();
const MegaMillions = require('../models/megaMillionsModel');

class MegaMillionData {
    async fetchSearchRange() {
        const start = await MegaMillions.findOne().sort({ drawingDate: 1}).select('drawingDate');
        const end = await MegaMillions.findOne().sort({drawingDate: -1}).select('drawingDate');

        return {
            startDate: start.drawingDate.toLocaleDateString(),
            endDate: end.drawingDate.toLocaleDateString()
        }
    }

    async fetchPerfectMatches(body) {
        const { game, mainNumbers, specialNumber } = body;
        const matches = await MegaMillions.find({
            numbers: { $all: mainNumbers },
            megaBall: specialNumber
        }).sort({ drawingDate: -1 });
        return matches;
    }

    async fetchPartialMatches(body) {

    }
}

module.exports = new MegaMillionData();
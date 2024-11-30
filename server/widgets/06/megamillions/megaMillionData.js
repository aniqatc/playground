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

    async fetchMatches(body) {
        const { mainNumbers, specialNumber } = body;

        // Find perfect matches
        const perfectMatches = await MegaMillions.find({
            numbers: { $all: mainNumbers },
            megaBall: specialNumber
        })
            .sort({ drawingDate: -1 })
            .exec();

        // Find partial matches
        const partialMatches = await MegaMillions.find({
            numbers: { $in: mainNumbers },
            megaBall: specialNumber
        })
            .sort({ drawingDate: -1 })
            .exec();

        const filteredPartialMatches = partialMatches.filter(match => {
            const matchedNumbers = match.numbers.filter(num => mainNumbers.includes(num));
            return matchedNumbers.length < mainNumbers.length;
        });

        return [...perfectMatches, ...filteredPartialMatches];
    }
}

module.exports = new MegaMillionData();
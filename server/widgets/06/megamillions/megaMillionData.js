const MegaMillions = require('../models/megaMillionsModel');

class MegaMillionData {
    async fetchSearchRange() {
        const start = await MegaMillions.findOne().sort({ drawingDate: 1 }).select('drawingDate');
        const end = await MegaMillions.findOne().sort({ drawingDate: -1 }).select('drawingDate');

        return {
            startDate: start.drawingDate.toLocaleDateString(),
            endDate: end.drawingDate.toLocaleDateString()
        }
    }

    async fetchMatches(body) {
        const { mainNumbers, specialNumber } = body;
        const matches = await MegaMillions.find({
            $or: [
                { numbers: { $in: mainNumbers } },
                { megaBall: specialNumber }
            ]
        })
            .select('numbers megaBall megaplier jackpot drawingDate')
            .sort({ drawingDate: -1 });

        const processedMatches = matches.map(drawing => {
            const matchedNumbers = drawing.numbers.filter(num => mainNumbers.includes(num.toString()));
            const megaBallMatch = drawing.megaBall.toString() === specialNumber;
            const isPerfectMatch = matchedNumbers.length === 5 && megaBallMatch;

            return {
                drawingDate: drawing.drawingDate,
                numbers: drawing.numbers,
                megaBall: drawing.megaBall,
                megaplier: drawing.megaplier,
                jackpot: drawing.jackpot,
                matchCount: matchedNumbers.length + (megaBallMatch ? 1 : 0),
                matchedNumbers,
                megaBallMatch,
                isPerfectMatch,
            };
        });
        return processedMatches.filter(match => match.matchCount >= 3);
    }

    async fetchStats(body) {}
}

module.exports = new MegaMillionData();
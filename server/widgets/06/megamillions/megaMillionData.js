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

        // Limit to recent matches and only fetch necessary fields
        const recentMatches = await MegaMillions.find({
            $or: [
                { numbers: { $in: mainNumbers } },
                { megaBall: specialNumber }
            ]
        })
            .select('numbers megaBall megaplier jackpot drawingDate')
            .sort({ drawingDate: -1 })
            .limit(50); // Limit to 50 most recent matches

        // Process matches more efficiently
        const processedMatches = recentMatches.map(drawing => {
            const matchedNumbers = drawing.numbers.filter(num =>
                mainNumbers.includes(num.toString())
            );

            return {
                drawingDate: drawing.drawingDate,
                numbers: drawing.numbers,
                megaBall: drawing.megaBall,
                megaplier: drawing.megaplier,
                jackpot: drawing.jackpot,
                matchCount: matchedNumbers.length + (drawing.megaBall.toString() === specialNumber ? 1 : 0),
                matchedNumbers: matchedNumbers,
                megaBallMatch: drawing.megaBall.toString() === specialNumber
            };
        });

        return processedMatches.sort((a, b) => b.matchCount - a.matchCount);
    }
}

module.exports = new MegaMillionData();
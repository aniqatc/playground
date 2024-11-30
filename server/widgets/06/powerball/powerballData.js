const Powerball = require('../models/powerballModel');
const MegaMillions = require("../models/megaMillionsModel");

class PowerballData {
    async fetchSearchRange() {
        const start = await Powerball.findOne().sort({ drawingDate: 1}).select('drawingDate');
        const end = await Powerball.findOne().sort({drawingDate: -1}).select('drawingDate');

        return {
            startDate: start.drawingDate.toLocaleDateString(),
            endDate: end.drawingDate.toLocaleDateString()
        }
    }

    async fetchMatches(body) {
        const { mainNumbers, specialNumber } = body;
        const matches = await Powerball.find({
            $or: [
                { numbers: { $in: mainNumbers } },
                { powerBall: specialNumber }
            ]
        })
            .select('numbers powerBall multiplier jackpot drawingDate')
            .sort({ drawingDate: -1 });

        const processedMatches = matches.map(drawing => {
            const matchedNumbers = drawing.numbers.filter(num =>
                mainNumbers.includes(num.toString())
            );
            const powerBallMatches = drawing.powerBall.toString() === specialNumber;
            const totalMatches = matchedNumbers.length + (powerBallMatches ? 1 : 0);

            return {
                drawingDate: drawing.drawingDate,
                numbers: drawing.numbers,
                megaBall: drawing.powerBall,
                megaplier: drawing.multiplier,
                jackpot: drawing.jackpot,
                matchCount: totalMatches,
                matchedNumbers,
                megaBallMatch: powerBallMatches,
                isPerfectMatch: matchedNumbers.length === 5 && powerBallMatches
            };
        });
        return processedMatches.filter(match => match.matchCount >= 3);
    }

    async fetchStats(body) {}
}

module.exports = new PowerballData();
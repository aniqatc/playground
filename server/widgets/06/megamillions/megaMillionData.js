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

    async fetchStats(body) {
        const { mainNumbers, specialNumber } = body;
        const allResults = await MegaMillions.find().select('drawingDate jackpot');

        let numberStats = [];
        for (let num of mainNumbers) {
            const count = await MegaMillions.countDocuments({ numbers: parseInt(num) });
            numberStats.push({
                number: num,
                frequency: count,
                percentage: ((count / allResults.length) * 100)
            });
        }

        const specialBallCount = await MegaMillions.countDocuments({ megaBall: parseInt(specialNumber) });
        numberStats.push({
            number: specialNumber,
            frequency: specialBallCount,
            percentage: ((specialBallCount / allResults.length) * 100),
            isSpecialBall: true
        });

        const maxJackpot = allResults.reduce((max, game) => {
            const amount = parseInt(game.jackpot.replace(/\D/g, ''));
            return amount > max ? amount : max;
        }, 0);

        return {
            drawingsSearched: allResults.length.toLocaleString(),
            largestJackpot: new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            }).format(maxJackpot),
            numberStatistics: numberStats
        };
    }
}

module.exports = new MegaMillionData();
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

        // First, get all perfect matches (5 numbers + megaball)
        const perfectMatches = await MegaMillions.find({
            numbers: { $all: mainNumbers },
            megaBall: specialNumber
        })
            .select('numbers megaBall megaplier jackpot drawingDate')
            .sort({ drawingDate: -1 });

        // Then, get partial matches that might have 3 or more matches
        const potentialMatches = await MegaMillions.find({
            $and: [
                { $or: [
                        { numbers: { $in: mainNumbers } },
                        { megaBall: specialNumber }
                    ]},
                // Exclude perfect matches
                { $nor: [{
                        numbers: { $all: mainNumbers },
                        megaBall: specialNumber
                    }]}
            ]
        })
            .select('numbers megaBall megaplier jackpot drawingDate')
            .sort({ drawingDate: -1 });

        // Process and filter matches
        const processMatches = (matches) => {
            return matches.map(drawing => {
                const matchedNumbers = drawing.numbers.filter(num =>
                    mainNumbers.includes(num.toString())
                );
                const megaBallMatches = drawing.megaBall.toString() === specialNumber;
                const totalMatches = matchedNumbers.length + (megaBallMatches ? 1 : 0);

                return {
                    drawingDate: drawing.drawingDate,
                    numbers: drawing.numbers,
                    megaBall: drawing.megaBall,
                    megaplier: drawing.megaplier,
                    jackpot: drawing.jackpot,
                    matchCount: totalMatches,
                    matchedNumbers: matchedNumbers,
                    megaBallMatch: megaBallMatches,
                    isPerfectMatch: matchedNumbers.length === 5 && megaBallMatches
                };
            });
        };

        // Combine, filter for 3+ matches, and sort
        const allMatches = [
            ...processMatches(perfectMatches),
            ...processMatches(potentialMatches)
        ]
            .filter(match => match.matchCount >= 3) // Only keep matches with 3 or more total matches
            .sort((a, b) => {
                // First sort by match count
                if (b.matchCount !== a.matchCount) {
                    return b.matchCount - a.matchCount;
                }
                // Then by date for matches with same count
                return new Date(b.drawingDate) - new Date(a.drawingDate);
            });

        return allMatches;
    }
}

module.exports = new MegaMillionData();
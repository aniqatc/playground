const Powerball = require('./models/powerballModel');
const MegaMillions = require('./models/megaMillionsModel');

class LotteryData {
    constructor() {
        this.powerballApi = {
            url: 'https://powerball.p.rapidapi.com/',
            host: 'powerball.p.rapidapi.com'
        };
        this.megaMillionsApi = {
            url: 'https://mega-millions.p.rapidapi.com/',
            host: 'mega-millions.p.rapidapi.com'
        };
        this.apiKey = process.env.LOTTERY_API_KEY;
    }
}

module.exports = new LotteryData();
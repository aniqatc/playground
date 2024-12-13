const Powerball = require('./models/powerballModel');
const MegaMillions = require('./models/megaMillionsModel');

class LotteryData {
  constructor() {
    this.powerballApi = {
      url: 'https://powerball.p.rapidapi.com/',
      host: 'powerball.p.rapidapi.com',
    };
    this.megaMillionsApi = {
      url: 'https://mega-millions.p.rapidapi.com/',
      host: 'mega-millions.p.rapidapi.com',
    };
    this.apiKey = process.env.LOTTERY_API_KEY;
  }

  async fetchPowerBall() {
    try {
      const response = await fetch(this.powerballApi.url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': this.powerballApi.host,
        },
      });

      const { data } = await response.json();
      const formattedDrawings = data.map((drawing) => ({
        drawingDate: new Date(drawing.DrawingDate),
        numbers: [
          drawing.FirstNumber,
          drawing.SecondNumber,
          drawing.ThirdNumber,
          drawing.FourthNumber,
          drawing.FifthNumber,
        ],
        powerBall: drawing.PowerBall,
        multiplier: drawing.Multiplier,
        jackpot: drawing.Jackpot,
        videoUrl: drawing.VideoUrl,
        numberSet: drawing.NumberSet,
      }));

      await Powerball.deleteMany({});
      await Powerball.insertMany(formattedDrawings);
    } catch (error) {
      console.error('Error in fetchPowerBall:', error);
      throw error;
    }
  }

  async fetchMegaMillions() {
    try {
      const response = await fetch(this.megaMillionsApi.url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': this.megaMillionsApi.host,
        },
      });
      const { data } = await response.json();
      const formattedDrawings = data.map((drawing) => ({
        drawingDate: new Date(drawing.DrawingDate),
        numbers: [
          drawing.FirstNumber,
          drawing.SecondNumber,
          drawing.ThirdNumber,
          drawing.FourthNumber,
          drawing.FifthNumber,
        ],
        megaBall: drawing.MegaBall,
        megaplier: drawing.Megaplier,
        jackpot: drawing.JackPot,
        videoUrl: drawing.VideoUrl,
        numberSet: drawing.NumberSet,
        nextJackpot: drawing.NextJackPot,
        nextDrawingDate: new Date(drawing.NextDrawingDate),
      }));

      await MegaMillions.deleteMany({});
      await MegaMillions.insertMany(formattedDrawings);
    } catch (error) {
      console.error('Error in fetchMegaMillions:', error);
      throw error;
    }
  }

  async updateLotteryData() {
    try {
      await this.fetchPowerBall();
      await this.fetchMegaMillions();
      console.log('All lottery data updated successfully');
    } catch (error) {
      console.error('Error updating lottery data:', error);
      throw error;
    }
  }
}

module.exports = new LotteryData();

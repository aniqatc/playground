const ExchangeRate = require('../models/exchangeRateModel');
const CurrencyInfo = require('../models/currencyInfoModel');

class CurrencyData {
    constructor() {
        this.apiKey = process.env.OPEN_EXCHANGE_API_KEY;
        this.baseURL = "https://openexchangerates.org/api";
        this.baseCurrency = "USD";
        this.cacheDuration = 24 * 60 * 60 * 1000;
    }

    async fetchCurrencyInfo() {
        const response = await fetch(`${this.baseURL}/currencies.json?app_id=${this.apiKey}`);
        const data = await response.json();

        if (data) {
            const currencyData = Object.entries(data).map(([code, fullName]) => ({
                currencyCode: code.toUpperCase(),
                fullName
            }));
            await CurrencyInfo.deleteMany({});
            await CurrencyInfo.insertMany(currencyData);
            return CurrencyInfo.find();
        }
    }

    async mergeRatesAndCurrencyInfo(rates) {
        const currencyInfo = await CurrencyInfo.find();

        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZoneName: 'short'
        }).format(rates[0]?.lastUpdated || new Date());

        return {
            rates: rates.map(rate => ({
                currencyCode: rate.currencyCode,
                rate: rate.rate,
                fullName: currencyInfo.find(c => c.currencyCode === rate.currencyCode)?.fullName || "Unknown Currency",
                symbol: currencyInfo.find(c => c.currencyCode === rate.currencyCode)?.symbol || ""
            })),
            lastUpdated: formattedDate
        };
    }

    async fetchExchangeRate(){
        const oldestRate = await ExchangeRate.findOne().sort({ lastUpdated: 1 });
        const isStale = !oldestRate || (Date.now() - oldestRate.lastUpdated > this.cacheDuration);

        if (!isStale) {
            const rates = await ExchangeRate.find();
            return this.mergeRatesAndCurrencyInfo(rates);
        }

        const response = await fetch(`${this.baseURL}/latest.json?app_id=${this.apiKey}&base=${this.baseCurrency}`);
        const data = await response.json();

        if (data && data.rates) {
            const now = new Date();
            const rateData = Object.entries(data.rates).map(([code, rate]) => ({
                currencyCode: code,
                rate: rate,
                lastUpdated: now
            }));

            await ExchangeRate.deleteMany({});
            const savedRates = await ExchangeRate.insertMany(rateData);
            return this.mergeRatesAndCurrencyInfo(savedRates);
        }
    }
}

module.exports = new CurrencyData();
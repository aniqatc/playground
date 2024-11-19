const Stock = require("../models/stockModel");
const Company = require("../models/companyModel");
const StockWeekly = require("../models/stockWeeklyData");

class MarketData {
    constructor() {
        this.apiKeyAV = process.env.ALPHA_VANTAGE_API_KEY;
        this.apiKeyTD = process.env.TWELVE_DATA_API_KEY;
        this.baseURLAV = "https://www.alphavantage.co/query";
        this.baseURLTD = "https://api.twelvedata.com";
        this.cacheDurationDay = 24 * 60 * 60 * 1000;
        this.cacheDurationWeek = (24 * 7) * 60 * 60 * 1000;
        this.featuredStocks = [
            'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
            'TSLA', 'NVDA', 'AMD', 'NFLX', 'IBM', 'RIOT', 'RBLX'
        ];
    }

    async getIndividualStock(symbol) {
        symbol = symbol.toUpperCase();

        // If it exists in DB, serve from DB
        let stock = await Stock.findOne({ symbol });
        if (stock) {
            const company = await Company.findOne({ symbol });
            const stockObj = stock.toObject();
            return {
                ...stockObj,
                lastUpdated: this.formatDate(stockObj.lastUpdated),
                logo: company?.logo || null,
                website: company?.website || null
            };
        }

        // Otherwise, fetch fresh data from API
        const response = await fetch(`${this.baseURLTD}/quote?symbol=${symbol}&apikey=${this.apiKeyTD}`);
        const data = await response.json();
        const company = await this.getCompanyInfo(symbol);
        const stockData = await this.saveStockToDB(symbol, data);

        return {
            ...stockData,
            lastUpdated: this.formatDate(stockData.lastUpdated),
            logo: company?.logo || null,
            website: company?.website || null
        };
    }

    async saveStockToDB(symbol, data) {
        const stockData = {
            symbol,
            name: data.name,
            price: parseFloat(data.close),
            change: parseFloat(data.change),
            changePercent: parseFloat(data.percent_change),
            volume: parseInt(data.volume),
            exchange: data.exchange || 'N/A',
            open: parseFloat(data.open),
            close: parseFloat(data.previous_close),
            yearHigh: parseFloat(data.fifty_two_week?.high || "N/A"),
            yearLow: parseFloat(data.fifty_two_week?.low || "N/A"),
            lastUpdated: new Date()
        };

        await Stock.findOneAndUpdate({ symbol }, stockData, { upsert: true, new: true });
        return stockData;
    }

    async getFeaturedStocks() {
        const mostRecentStockEntry = await Stock.findOne().sort({ lastUpdated: -1 });
        if (!mostRecentStockEntry || Date.now() - mostRecentStockEntry.lastUpdated > this.cacheDurationDay) {
            await this.updateFeaturedStocks();
        }

        const stocks = await Stock.find().sort({ symbol: 1 });
        const companies = await Company.find({
            symbol: { $in: stocks.map(stock => stock.symbol) }
        });

        const lastUpdated = mostRecentStockEntry?.lastUpdated;
        return {
            stocks: stocks.map(stock => {
                const company = companies.find(company => company.symbol === stock.symbol);
                const stockObj = stock.toObject();
                return {
                    ...stockObj,
                    lastUpdated: this.formatDate(stockObj.lastUpdated),
                    logo: company?.logo || null,
                    website: company?.website || null
                };
            }),
            lastUpdated: this.formatDate(lastUpdated)
        };
    }

    async updateFeaturedStocks() {
        const response = await fetch (`${this.baseURLAV}?function=TOP_GAINERS_LOSERS&apikey=${this.apiKeyAV}`);
        const data = await response.json();

        const topActive = data.most_actively_traded.slice(0, 8).map(stock => stock.ticker);
        const symbols = [...topActive].sort(() => Math.random() - 0.5) || this.featuredStocks;

        await Stock.deleteMany({}); // delete current collection of stocks
        for (const symbol of symbols) {
            await this.updateStockData(symbol);
        }
    }

    async updateStockData(symbol) {
        const response = await fetch(`${this.baseURLTD}/quote?symbol=${symbol}&apikey=${this.apiKeyTD}`);
        const data = await response.json();

        await this.saveStockToDB(symbol, data);
        await this.getCompanyInfo(symbol);
    }


    async getCompanyInfo(symbol) {
        let company = await Company.findOne({ symbol });
        if (company) return company;

        const response = await fetch(`${this.baseURLAV}?function=OVERVIEW&symbol=${symbol}&apikey=${this.apiKeyAV}`);
        const data = await response.json();

        const logoURL = data.OfficialSite && data.OfficialSite !== 'None'
                ? `https://www.google.com/s2/favicons?domain=${new URL(data.OfficialSite).hostname}&sz=128`
                : `https://www.google.com/s2/favicons?domain=${symbol.toLowerCase()}.com&sz=128`;

        company = await Company.create({
            symbol,
            name: data.Name,
            website: data.OfficialSite,
            logo: logoURL,
            exchange: data.Exchange,
            lastUpdated: new Date()
        })
        return company;
    }

    async getStockWeeklyData(symbol) {
        symbol = symbol.toUpperCase();
            // Check DB first
            const weeklyData = await StockWeekly.findOne({ symbol });
            const isDataStale = weeklyData &&
                (Date.now() - weeklyData.lastUpdated > this.cacheDurationWeek);

            if (weeklyData && !isDataStale) {
                return weeklyData.data;
            }

            const response = await fetch(`${this.baseURLTD}/time_series?symbol=${symbol}&interval=1day&outputsize=7&apikey=${this.apiKeyTD}`);
            const data = await response.json();

            if (data.status === 'error' || data.code === 400 || !data.values) {
                // Return existing data if we have it
                if (weeklyData) {
                    return weeklyData.data;
                }
                return [];
            }

            const formattedData = data.values.map(stock => ({
                date: stock.datetime,
                close: parseFloat(stock.close)
            }));

            await StockWeekly.findOneAndUpdate(
                { symbol },
                {
                    symbol,
                    data: formattedData,
                    lastUpdated: new Date()
                },
                { upsert: true }
            );
            return formattedData;
    }

    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZoneName: 'short'
        }).format(date);
    }
}

module.exports = new MarketData();
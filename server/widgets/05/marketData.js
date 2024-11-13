class MarketData {
    constructor() {
        this.apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        this.baseURL = "https://www.alphavantage.co/query";
        this.batchSize = 15;
        this.popularStocks = [
            'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA', 'NVDA', 'AMD',
            'NFLX', 'DIS', 'PYPL', 'INTC', 'CSCO', 'ADBE', 'ORCL', 'CRM',
            'IBM', 'QCOM', 'SHOP', 'UBER', 'LYFT', 'SNAP', 'PINS', 'PLTR',
            'COIN', 'SQ', 'U', 'RBLX', 'ZM', 'DASH', 'MARA', 'RIOT',
            'BA', 'WMT', 'T', 'KO', 'PEP', 'JNJ', 'PFE', 'MRK',
            'CVX', 'XOM', 'WFC', 'BAC', 'GS', 'JPM', 'BLK', 'V',
            'MA', 'AXP', 'MCD', 'SBUX', 'HD', 'LOW', 'COST', 'NKE',
            'SPOT', 'TWLO', 'FSLY', 'TTD', 'DOCU', 'ZM', 'SQ', 'BYND',
            'BABA', 'JD', 'BIDU', 'NIO', 'XPEV', 'LI', 'BILI', 'TME',
            'SONY', 'NTDOY', 'SNE', 'EA', 'ATVI', 'TTWO', 'ROKU', 'ZM',
            'PTON', 'ENPH', 'SEDG', 'RUN', 'SPWR', 'PLUG', 'FCEL', 'BLDP'
        ];
    }

    async getActiveStocks() {
        const response = await fetch (`${this.baseURL}?function=TOP_GAINERS_LOSERS&apikey=${this.apiKey}`);
        const data = await response.json();
        // Only ticker, price, volume, change amount & percentage:
        const activeStocks = data.most_actively_traded || [];

        // For each of the most actively traded stocks, get additional details and package into one object for the frontend
        const activeStocksWithDetails = await Promise.all(activeStocks.map(async (stock) => {
            const details = await this.getCompanyDetails(stock.ticker);
            return {
                symbol: stock.ticker,
                name: details.name || stock.ticker,
                price: stock.price,
                change: stock.change_amount,
                changePercent: stock.change_percentage,
                volume: stock.volume,
                exchange: details.exchange || "N/A",
                website: details.website,
                yearHigh: details.yearHigh,
                yearLow: details.yearLow,
                logo: details.logo
            };
        }))
    }

    async getCompanyDetails(symbol) {
        const response = await fetch(`${this.baseURL}?function=OVERVIEW&symbol=${symbol}&apikey=${this.apiKey}`);
        const data = await response.json();

        if (!data || !data.Symbol) return null;

        const logoURL = data.OfficialSite
            ? `https://www.google.com/s2/favicons?domain=${new URL(data.OfficialSite).hostname}&sz=128`
            : `https://www.google.com/s2/favicons?domain=aniqa.dev&sz=128`

        return {
            name: data.Name,
            exchange: data.Exchange,
            symbol: data.Symbol,
            website: data.OfficialSite,
            yearHigh: data['52WeekHigh'],
            yearLow: data['52WeekLow'],
            logo: logoURL
        };
    }

    async getOpenCloseDetails(symbol) {}
}

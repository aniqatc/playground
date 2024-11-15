async function fetchMarketData() {
    const response = await fetch(`${process.env.SERVER}/widget/markets/featured`);
    return response.json();
}

async function fetchChartData(symbol) {
    const response = await fetch(`${process.env.SERVER}/widget/markets/weekly/${symbol}`);
    return response.json();
}

async function fetchCurrencyData() {}

export { fetchMarketData, fetchChartData, fetchCurrencyData }
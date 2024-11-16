async function fetchMarketData() {
    const response = await fetch(`${process.env.SERVER}/widget/markets/featured`);
    return response.json();
}

async function fetchChartData(symbol) {
    const response = await fetch(`${process.env.SERVER}/widget/markets/weekly/${symbol}`);
    return response.json();
}

async function fetchCurrencyData() {
    const response = await fetch(`${process.env.SERVER}/widget/currencies/rates`);
    const data = await response.json();
    data.rates = data.rates.sort(() => Math.random() - 0.5);
    return data;
}

export { fetchMarketData, fetchChartData, fetchCurrencyData }
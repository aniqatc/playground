export async function fetchMarketData() {
    const response = await fetch(`${process.env.SERVER}/widget/markets/featured`);
    return response.json();
}
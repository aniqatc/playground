async function fetchAllData(game) {
    const response = await fetch(`${process.env.SERVER}/widget/lottery/${game}/all`);
    const data = await response.json();
    return data.data;
}

async function fetchSearchRange(game) {
    const response = await fetch(`${process.env.SERVER}/widget/lottery/${game}/range`);
    const data = await response.json();
    return data.dates;
}

export { fetchSearchRange };
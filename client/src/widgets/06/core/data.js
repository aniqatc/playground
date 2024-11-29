async function fetchAllPowerballData() {
    const response = await fetch(`${process.env.SERVER}/widget/lottery/powerball/all`);
    const data = await response.json();
    return data.data;
}

async function fetchAllMegamillionData() {
    const response = await fetch(`${process.env.SERVER}/widget/lottery/megamillion/all`);
    const data = await response.json();
    return data.data;
}

async function fetchMegamillionSearchRange() {

}

async function fetchPowerballSearchRange() {

}
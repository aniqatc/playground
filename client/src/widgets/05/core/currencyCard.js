import marketContext from "./context.js";
const { currencyCardGroup } = marketContext;
const batchSize = 50;
let currentIndex = 0;
let isLoading = false;

function generateCurrencyCards(data) {
    currentIndex = 0;
    isLoading = false;
    currencyCardGroup.innerHTML = generateBaselineCurrencyCard();
    loadCurrencyCards(data.rates);
}

function loadCurrencyCards(rates) {
    if (currentIndex >= rates.length || isLoading) return; // once we reach the end of the currencyData, no longer load cards

    isLoading = true; // loading this batch just started
    const batch = rates.slice(currentIndex, currentIndex + batchSize); // only load currency within the batch size
    batch.forEach(currency => {
        currencyCardGroup.innerHTML += currencyCardHTML(currency);
    })

    currentIndex += batchSize; // update index for the currencyData
    isLoading = false; // loading this batch is complete

    const interval = setInterval(() => {
        if (currentIndex >= rates.length) {
            clearInterval(interval);
            return;
        }
        const nextBatch = rates.slice(currentIndex, currentIndex + batchSize);
        nextBatch.forEach(currency => {
            currencyCardGroup.innerHTML += currencyCardHTML(currency);
        })
        currentIndex += batchSize;
    }, 100);
}

function currencyCardHTML(currency) {
    return `<div class="card ${currency.rate >= 1 ? "positive" : "negative"}">
        <div class="card-head">
            <div class="card-heading--name">
                        <span class="logo-wrapper">
                            <span class="symbol">${currency.symbol || '<i class="fa-solid fa-sack-dollar"></i>'}</span>
                        </span>
                <h1 class="company-symbol">${currency.currencyCode}</h1>
                <span class="company-name">${currency.fullName}</span>
            </div>
            <div class="card-heading--price">
                <div>
                            <span class="company-price--value">
                                <i class="fa-solid fa-arrow-trend-${currency.rate >= 1 ? "up" : "down"}"></i>
                            </span>
                    <h1 class="company-price--indicator">${currency.rate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                </div>
                <span class="company-price--label">versus <strong>USD</strong></span>
            </div>
        </div>
    </div>`
}

function generateBaselineCurrencyCard() {
    return `<div class="card baseline">
                    <div class="card-head">
                            <div class="card-heading--name">
                                <span class="logo-wrapper">                            
                                    <span class="symbol"><i class="fa-solid fa-dollar-sign"></i></span>
                                </span>
                                <h1 class="company-symbol">USD</h1>
                                <span class="company-name">United States Dollar</span>
                            </div>
                        <div class="card-heading--price">
                            <div>
                                <span class="company-price--value"><i class="fa-solid fa-money-check-dollar"></i></span>
                                <h1 class="company-price--indicator">$1.00</h1>
                            </div>
                            <span class="company-price--label">Baseline Currency</span>
                        </div>
                    </div>
                 </div>`
}

export { generateCurrencyCards, currencyCardHTML }
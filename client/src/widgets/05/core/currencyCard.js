import marketContext from "./context.js";
const { currencyCardGroup } = marketContext;
const batchSize = 50;
let currentIndex = 0;
let isLoading = false;
let scrollHandler;

function generateCurrencyCards(data) {
    currentIndex = 0;
    isLoading = false;
    currencyCardGroup.innerHTML = generateBaselineCurrencyCard();
    loadMoreCurrencyCards(data.rates);

    scrollHandler = () => {
        if (isLoading) return;
        const { scrollTop, scrollHeight, clientHeight } = currencyCardGroup;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            loadMoreCurrencyCards(data.rates, currencyCardGroup);
        }
    };
    currencyCardGroup.addEventListener('scroll', scrollHandler);
}

function loadMoreCurrencyCards(rates) {
    if (currentIndex >= rates.length || isLoading) return; // once we reach the end of the currencyData, no longer load cards

    isLoading = true; // loading this batch just started
    const batch = rates.slice(currentIndex, currentIndex + batchSize); // only load currency within the batch size
    batch.forEach(currency => {
        currencyCardGroup.innerHTML += `
            <div class="card ${currency.rate >= 1 ? "positive" : "negative"}">
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
    })

    currentIndex += batchSize; // update index for the currencyData
    isLoading = false; // loading this batch is complete
}

function cleanupCurrencyCards() {
    if (scrollHandler) {
        currencyCardGroup.removeEventListener('scroll', scrollHandler);
    }
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

export { generateCurrencyCards, cleanupCurrencyCards }
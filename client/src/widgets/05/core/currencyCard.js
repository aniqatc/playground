import marketContext from "./context.js";

export function generateCurrencyCards(data) {
    const { currencyCardGroup } = marketContext;
    currencyCardGroup.innerHTML = displayBaselineCurrencyCard();

    const cardEl = document.createElement("div");
    cardEl.classList.add("card");

    if (data.rates.length > 0) {
        data.rates.slice(0, 50).forEach(currency => {
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
    }
}

function displayBaselineCurrencyCard() {
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
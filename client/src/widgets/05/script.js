import marketContext from "./core/context.js";
import { fetchMarketData } from "./core/data.js";
import { toggleCardState, clearLoadingMsg, generateStockCard } from "./core/stockCard.js";
import { createChart } from "./core/charts";

export async function initializeScript() {
    try {
        let rates, lastUpdated;
        try {
            const response = await fetch(`${process.env.SERVER}/widget/currencies/rates`);
            ({ rates, lastUpdated } = await response.json());
            rates = rates.sort(() => Math.random() - 0.5);
        } catch (error) {
            console.error('Failed to fetch currency data:', error);
            rates = [];
            lastUpdated = new Date().toLocaleString();
        }

        const stockData = await fetchMarketData();

        marketContext.currencyButton.addEventListener("click", () => {
            if (marketContext.currencyTab.classList.contains("hidden")) {
                marketContext.currencyButton.classList.add("active");
                marketContext.stockButton.classList.remove("active");
                marketContext.currencyTab.classList.remove("hidden");
                marketContext.stockTab.classList.add("hidden");

                clearLoadingMsg("currency");
                marketContext.currencyCardGroup.innerHTML = `<div class="card baseline"><div class="card-head">
                            <div class="card-heading--name">
                                <span class="logo-wrapper">                            
                                    <img src="https://aniqa.dev/favicon.png"/>
                                </span>
                                <h1 class="company-symbol">USD</h1>
                                <span class="company-name">United States Dollar</span>
                            </div>
                        <div class="card-heading--price">
                            <div>
                                <span class="company-price--indicator"><i class="fa-solid fa-money-check-dollar"></i></span>
                                <h1 class="company-price--value">1</h1>
                            </div>
                            <span class="company-price--label">Baseline Currency</span>
                        </div>
                    </div></div>`;


                if (rates.length > 0) {
                    rates.slice(0, 50).forEach(rate => {
                        marketContext.currencyCardGroup.innerHTML += `
                            <div class="card ${rate.rate >= 1 ? "positive" : "negative"}">
                                <div class="card-head">
                                    <div class="card-heading--name">
                                        <span class="logo-wrapper">${rate.symbol || ''}</span>
                                        <h1 class="company-symbol">${rate.currencyCode}</h1>
                                        <span class="company-name">${rate.fullName}</span>
                                    </div>
                                    <div class="card-heading--price">
                                        <div>
                                            <span class="company-price--indicator">
                                                <i class="fa-solid fa-arrow-trend-${rate.rate >= 1 ? "up" : "down"}"></i>
                                            </span>
                                            <h1 class="company-price--value">${rate.rate.toFixed(2)}</h1>
                                        </div>
                                        <span class="company-price--label">versus USD</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                }

                marketContext.updateLastUpdated(lastUpdated);
            }
        });

        marketContext.stockButton.addEventListener("click", () => {
            if (marketContext.stockTab.classList.contains("hidden")) {
                marketContext.currencyButton.classList.remove("active");
                marketContext.stockButton.classList.add("active");
                marketContext.stockTab.classList.remove("hidden");
                marketContext.currencyTab.classList.add("hidden");
                marketContext.updateLastUpdated(stockData.lastUpdated);
            }
        });

        clearLoadingMsg("stock");
        marketContext.updateLastUpdated(stockData.lastUpdated);

        if (marketContext.stockCardGroup && stockData.stocks.length > 0) {
            stockData.stocks.forEach((stock, index) => generateStockCard(stock, index));
        }

        marketContext.expandAllButton.addEventListener("click", () => {
            const cards = marketContext.stockCardGroup.querySelectorAll(".card");
            const allExpanded = Array.from(cards).every(card => !card.classList.contains("initial"));

            if (allExpanded) {
                cards.forEach(card => {
                    const graphDiv = card.querySelector(".card-body--graph");
                    if (graphDiv.chart) {
                        graphDiv.chart.destroy();
                        graphDiv.chart = null;
                    }
                    graphDiv.innerHTML = "";
                    toggleCardState(card);
                });
            } else {
                cards.forEach(async card => {
                    if (card.classList.contains("initial")) {
                        toggleCardState(card);

                        const graphDiv = card.querySelector(".card-body--graph");
                        graphDiv.innerHTML = '<canvas></canvas>';

                        const symbol = card.querySelector(".company-symbol").textContent;
                        const stock = data.stocks.find(s => s.symbol === symbol);

                        if (stock) {
                            graphDiv.chart = await createChart(card, stock);
                        }
                    }
                })
            }
        });

    } catch (error) {
        console.error('Script initialization error:', error);
        clearLoadingMsg("error");
    }
}
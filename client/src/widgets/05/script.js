import marketContext from "./core/context.js";
import { fetchMarketData } from "./core/data.js";
import { toggleCardState, clearLoadingMsg, generateStockCard } from "./core/stockCard.js";
import { createChart } from "./core/charts";

export async function initializeScript() {
    const response = await fetch(`${process.env.SERVER}/widget/currencies/rates`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { rates, lastUpdated } = await response.json();
    rates.sort(() => Math.random() - 0.5)

    marketContext.currencyButton.addEventListener("click", async () => {

        if (marketContext.currencyTab.classList.contains("hidden")) {
            marketContext.currencyButton.classList.add("active");
            marketContext.stockButton.classList.remove("active");
            marketContext.currencyTab.classList.remove("hidden");
            marketContext.stockTab.classList.add("hidden");
            clearLoadingMsg("currency");
            for (let i = 0; i < 50; i++) {
                marketContext.currencyCardGroup.innerHTML += `
                    <div class="card ${rates[i].rate >= 1 ? "positive" : "negative"}"><div class="card-head">
                            <div class="card-heading--name">
                                <span class="logo-wrapper">                            
                                    ${rates[i].symbol}
                                </span>
                                <h1 class="company-symbol">${rates[i].currencyCode}</h1>
                                <span class="company-name">${rates[i].fullName}</span>
                            </div>
                        <div class="card-heading--price">
                            <div>
                                <span class="company-price--indicator"><i class="fa-solid fa-arrow-trend-${rates[i].rate >= 1 ? "up" : "down"}"></i></span>
                                <h1 class="company-price--value">${rates[i].rate.toFixed(2)}</h1>
                            </div>
                            <span class="company-price--label">versus USD</span>
                        </div>
                    </div></div>
                `
            }
            marketContext.updateLastUpdated(lastUpdated);
        }
    })

    const data = await fetchMarketData();
    marketContext.stockButton.addEventListener("click", async () => {
        if (marketContext.stockTab.classList.contains("hidden")) {
            marketContext.currencyButton.classList.remove("active");
            marketContext.stockButton.classList.add("active");
            marketContext.stockTab.classList.remove("hidden");
            marketContext.currencyTab.classList.add("hidden");
            marketContext.updateLastUpdated(data.lastUpdated);
        }
    })
    clearLoadingMsg("stock");
    marketContext.updateLastUpdated(data.lastUpdated);

    if (marketContext.stockCardGroup && data.stocks) {
        data.stocks.forEach((stock, index) => generateStockCard(stock, index));
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
}


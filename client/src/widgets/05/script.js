import marketContext from "./core/context.js";
import { fetchMarketData } from "./core/data.js";
import { toggleCardState, clearLoadingMsg, generateStockCard } from "./core/stockCard.js";
import { createChart } from "./core/charts";

export async function initializeScript() {
    marketContext.currencyButton.addEventListener("click", async () => {

        if (marketContext.currencyTab.classList.contains("hidden")) {
            marketContext.currencyButton.classList.add("active");
            marketContext.stockButton.classList.remove("active");
            marketContext.currencyTab.classList.remove("hidden");
            marketContext.stockTab.classList.add("hidden");
            clearLoadingMsg("currency");
        }
    })

    marketContext.stockButton.addEventListener("click", async () => {
        if (marketContext.stockTab.classList.contains("hidden")) {
            marketContext.currencyButton.classList.remove("active");
            marketContext.stockButton.classList.add("active");
            marketContext.stockTab.classList.remove("hidden");
            marketContext.currencyTab.classList.add("hidden");
        }
    })

    const data = await fetchMarketData();
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


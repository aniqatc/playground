import marketContext from "./context.js";
import { toggleCardState } from "./stockCard";
import { createChart } from "./charts";
import { generateCurrencyCards } from "./currencyCard";

const { stockButton,
    currencyButton,
    expandAllButton,
    stockTab,
    currencyTab,
    stockCardGroup,
    currencyCardGroup,
    scrollToElement } = marketContext;

export function initializeMenu(stockData, currencyData) {
    stockButton.addEventListener("click", () => { initializeStockBtn(stockData) });
    currencyButton.addEventListener("click", () => { initializeCurrencyBtn(currencyData) });
    expandAllButton.addEventListener("click", () => { initializeExpandBtn(stockData) });
}

function initializeExpandBtn(stockData) {
        if (!stockTab.classList.contains("hidden")) {
            const cards = stockCardGroup.querySelectorAll(".card");
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
                        const stock = stockData.stocks.find(stock => stock.symbol === symbol);

                        if (stock) {
                            graphDiv.chart = await createChart(card, stock);
                        }
                    }
                })
            }
        } else if (!currencyTab.classList.contains("hidden")) {
            currencyCardGroup.querySelectorAll(".card").forEach(card => {
                if (!card.classList.contains("baseline")) {
                    card.classList.toggle("initial");
                }
            })
        }
    }

function initializeStockBtn(stockData) {
    if (stockTab.classList.contains("hidden")) {
        currencyButton.classList.remove("active");
        stockButton.classList.add("active");
        currencyTab.classList.add("hidden");
        stockTab.classList.remove("hidden");
        marketContext.updateLastUpdated(stockData.lastUpdated);
        marketContext.updateDescription("stocks");
        scrollToElement(stockTab);
    }
}

function initializeCurrencyBtn(currencyData) {
    if (currencyTab.classList.contains("hidden")) {
        currencyButton.classList.add("active");
        stockButton.classList.remove("active");
        if (currencyCardGroup.innerHTML === "") {
            generateCurrencyCards(currencyData);
        }
        stockTab.classList.add("hidden");
        currencyTab.classList.remove("hidden");
        marketContext.updateLastUpdated(currencyData.lastUpdated);
        marketContext.updateDescription("currencies");
        scrollToElement(currencyTab);
    }
}
import marketContext from "./context.js";
import { createChart } from "./charts";

async function generateStockCard(stock, index) {
    const { stockCardGroup } = marketContext;
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    if (index !== 0) {
        cardEl.classList.add("initial");
    }

    stock.change >= 0
        ? cardEl.classList.add("positive")
        : cardEl.classList.add("negative");

    cardEl.innerHTML = `<div class="card-head">
                           <a href="${stock.website}" target="_blank">
                            <div class="card-heading--name">
                                <span class="logo-wrapper">                            
                                    <img src="${stock.logo}" alt="${stock.symbol} logo"/>
                                </span>
                                <h1 class="company-symbol">${stock.symbol}</h1>
                                <span class="company-name">${stock.name}</span>
                            </div></a>
                        <div class="card-heading--price">
                            <div>
                                <span class="company-price--indicator"><i class="fa-solid fa-arrow-trend-${stock.change > 0 ? 'up' : 'down'}"></i></span>
                                <h1 class="company-price--value">$${parseFloat(stock.price).toFixed(2)}</h1>
                            </div>
                            <span class="company-price--label">Price</span>
                        </div>
                    </div>
                    <div class="card-body">
                    <ul class="card-body--details">
                        <li>
                            <span class="card-body--details_value">${parseInt(stock.volume).toLocaleString()}</span>
                            <span class="card-body--details_label">Volume</span>
                        </li> 
                        <li>
                            <span class="card-body--details_value">${parseFloat(stock.changePercent).toFixed(2)}%</span>
                            <span class="card-body--details_label">Change (%)</span>
                        </li> 
                        <li>
                            <span class="card-body--details_value company-change-value">${parseFloat(stock.change).toFixed(2)}</span>
                            <span class="card-body--details_label">Change</span>  
                        </li>     
                        <li>
                            <span class="card-body--details_value">${parseFloat(stock.open).toFixed(2)}</span>
                            <span class="card-body--details_label">Open</span>
                        </li>  
                        <li>
                            <span class="card-body--details_value">${parseFloat(stock.close).toFixed(2)}</span>
                            <span class="card-body--details_label">Close</span>
                        </li>
                        <li>
                            <span class="card-body--details_value">${stock.exchange}</span>
                            <span class="card-body--details_label">Exchange</span>
                        </li>
                        <li>
                            <span class="card-body--details_value">${parseFloat(stock.yearLow).toFixed(2)}</span>
                            <span class="card-body--details_label">Year Low</span>
                        </li>  
                        <li>
                            <span class="card-body--details_value">${parseFloat(stock.yearHigh).toFixed(2)}</span>
                            <span class="card-body--details_label">Year High</span>
                        </li>                                       
                    </ul>
                        <div class="card-body--graph">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="expand-btn">Details <i class="fa-solid fa-arrow-${cardEl.classList.contains("initial") ? "right" : "left" }-long"></i></button>
                    </div>`
    const graphDiv = cardEl.querySelector(".card-body--graph");
    graphDiv.innerHTML = '<canvas></canvas>';

    if (index === 0) {
        stockCardGroup.prepend(cardEl);
        await createChart(cardEl, stock);
    } else {
        stockCardGroup.append(cardEl);
    }

    stockCardEventHandlers(cardEl, stock);
}

function stockCardEventHandlers(cardEl, stock) {
    const expandBtn = cardEl.querySelector(".expand-btn");
    const graphDiv = cardEl.querySelector(".card-body--graph");
    let chart = null;

    expandBtn.addEventListener("click", async function () {
        toggleCardState(cardEl);

        cardEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (!cardEl.classList.contains("initial")) {
            graphDiv.innerHTML = '<canvas></canvas>';
            chart = await createChart(cardEl, stock);
        } else {
            if (chart) {
                chart.destroy();
                chart = null;
            }
            graphDiv.innerHTML = "";
        }
    });
}

function toggleCardState(cardEl) {
    const expandBtn = cardEl.querySelector(".expand-btn");
    const shouldExpand = cardEl.classList.contains("initial");

    if (shouldExpand) {
        cardEl.classList.remove("initial");
        expandBtn.innerHTML = `Details <i class="fa-solid fa-arrow-left-long"></i>`;
    } else {
        cardEl.classList.add("initial");
        expandBtn.innerHTML = `Details <i class="fa-solid fa-arrow-right-long"></i>`;
    }
}

function clearLoadingMsg(type) {
    const { stockCardGroup, currencyCardGroup } = marketContext;
    if (type === "stock") {
        stockCardGroup.classList.remove("loading");
        stockCardGroup.innerHTML = "";
    } else {
        // tempppppp
        currencyCardGroup.classList.remove("loading");
        currencyCardGroup.innerHTML = `                <div class="card baseline"><div class="card-head">
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
    }
}

export { toggleCardState, clearLoadingMsg, generateStockCard };
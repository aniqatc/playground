export async function initializeScript() {
    // temporary
    const response = await fetch(`${process.env.SERVER}/widget/markets/featured`);
    const json = await response.json();

    const widget = document.querySelector("#widget-05");
    const cardGroup = widget.querySelector('.card-group');
    cardGroup.innerHTML = json.stocks.map(stock => `
                  <div class="card initial ${stock.change >= 0 ? 'positive' : 'negative'}">
                    <div class="card-head">
                        <div class="card-heading--name">
                            <span class="logo-wrapper">                            
                            <img src="${stock.logo}" alt="${stock.symbol} logo"/>
                            </span>
                            <h1 class="company-symbol">${stock.symbol}</h1>
                            <span class="company-name">${stock.name}</span>
                        </div>
                        <div class="card-heading--price">
                            <div>
                                <span class="company-price--indicator"><i class="fa-solid fa-arrow-trend-${stock.change >= 0 ? 'up' : 'down'}"></i></span>
                                <h1 class="company-price--value">${stock.price}</h1>
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
                        <span class="card-body--details_value">${parseFloat(stock.change).toFixed(2)}</span>
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
                        <div class="card-body--graph"></div>
                    </div>
                    <div class="card-footer">
                    <button class="expand-btn">Details <i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                </div>
    `).join("");
}



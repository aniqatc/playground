class MarketContext {
    constructor() {
        this.initializeElements();
    }

    initializeElements() {
        this.widget = document.querySelector("#widget-05");
        this.messageEl = this.widget.querySelector(".content-footer .message");
        // Menu
        this.stockButton = this.widget.querySelector(".stock-btn");
        this.currencyButton = this.widget.querySelector(".currency-btn");
        this.expandAllButton = this.widget.querySelector(".expandAll-btn");
        // Tabs
        this.stockTab = this.widget.querySelector(".stock-container");
        this.currencyTab = this.widget.querySelector(".currency-container");
        // Cards
        this.stockCardGroup = this.stockTab.querySelector(".card-group");
        this.currencyCardGroup = this.currencyTab.querySelector(".card-group");
        // Inputs
        this.stockSearch = this.widget.querySelector(".stock-input");
        this.currencySearch = this.widget.querySelector(".currency-input");
    }

    updateLastUpdated(timestamp) {
        this.messageEl.textContent = `Last Updated: ${timestamp}`;
    }
}

const marketContext = new MarketContext();
export default marketContext;

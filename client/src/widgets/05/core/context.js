class MarketContext {
    constructor() {
        this.initializeElements();
    }

    initializeElements() {
        this.widget = document.querySelector("#widget-05");
        this.timestampEl = this.widget.querySelector(".timestamp-wrapper .timestamp");
        this.descriptionEl = this.widget.querySelector(".short-description");
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
        // Search
        this.stockSearch = this.widget.querySelector(".stock-input");
        this.stockSearchButton = this.widget.querySelector(".stock-search-btn");
        this.currencySearch = this.widget.querySelector(".currency-input");
    }

    updateLastUpdated(timestamp) {
        this.timestampEl.textContent = `Last Updated: ${timestamp}`;
    }

    updateDescription(type) {
        if (type === "stocks") {
            this.descriptionEl.textContent = `Top Actively Traded`;
        }
        if (type === "currencies") {
            this.descriptionEl.textContent = `Exchange Rates`;
        }
    }

    clearLoadingMsg() {
        this.stockCardGroup.classList.remove("loading");
        this.stockCardGroup.innerHTML = "";
    }

    addInputErrorStyling(searchEl, btnEl, type, example) {
        btnEl?.classList.add("error");
        searchEl?.classList.add("error");
        searchEl.placeholder = `Search ${type} Symbol (e.g. ${example})`;
        if (!btnEl === null) {
            searchEl.value = "";
        }
    }

    removeInputErrorStyling(searchEl, btnEl) {
        searchEl?.classList.remove("error");
        btnEl?.classList.remove("error");
    }

    scrollToElement(el) {
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

const marketContext = new MarketContext();
export default marketContext;

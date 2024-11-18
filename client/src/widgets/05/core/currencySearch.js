import marketContext from "./context";

const { currencySearch, currencySearchButton, addInputErrorStyling, removeInputErrorStyling, scrollToElement } = marketContext;

export function initializeCurrencySearch() {
    currencySearch.addEventListener('input', ({target}) => removeInputErrorStyling(target, currencySearchButton));
    currencySearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currencySearchButton.click();
        }
    });
    currencySearchButton.addEventListener("click", () => {
        const input = currencySearch.value.trim();
        if (!input) {
            addInputErrorStyling(currencySearch, currencySearchButton, "Currency", "BDT");
        }
    })
}


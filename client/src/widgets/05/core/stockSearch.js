import marketContext from "./context";
import { fetchIndividualStockData } from "./data";
import { generateStockCard } from "./stockCard";

const { stockSearch, stockSearchButton, addInputErrorStyling, removeInputErrorStyling, scrollToElement } = marketContext;

export function initializeStockSearch() {
    stockSearchButton.addEventListener("click", handleSearch);
    stockSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            stockSearchButton.click();
        }
    });
   stockSearch.addEventListener('input', ({target}) => removeInputErrorStyling(target, stockSearchButton));
}

async function handleSearch() {
    try {
        const symbol = stockSearch.value.toUpperCase().trim();
        if (!symbol) {
            addInputErrorStyling(stockSearch, stockSearchButton, "Company", "AAPL");
            return;
        }

        const existingCard = document.querySelector(`.card[data-symbol="${symbol}"]`);
        if (existingCard) {
            scrollToElement(existingCard);
            if (existingCard.classList.contains('initial')) {
                existingCard.querySelector('.expand-btn').click();
            }
            stockSearch.value = "";
            return;
        }

        const stock = await fetchIndividualStockData(symbol);
        await generateStockCard(stock, 0);
        const newCard = document.querySelector(`.card[data-symbol="${symbol}"]`);
        if (newCard) {
            scrollToElement(newCard);
        }
        stockSearch.value = "";
    } catch (error) {
        addInputErrorStyling(stockSearch, stockSearchButton, "Company", "AAPL");
    }
}

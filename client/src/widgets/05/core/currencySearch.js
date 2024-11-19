import marketContext from "./context";

const { currencyCardGroup, currencySearch, addInputErrorStyling, removeInputErrorStyling } = marketContext;

export function initializeCurrencySearch(data) {
    currencySearch.addEventListener('input', () => {
        const input = currencySearch.value.trim().toLowerCase();
        const cards = currencyCardGroup.querySelectorAll('.card:not(.baseline)');

        if (!input) {
            addInputErrorStyling(currencySearch, null, "Currency", "BDT");
            cards.forEach(card => card.style.display = '');
            return;
        }

        let matchesFound = false;
        if (input) {
            removeInputErrorStyling(currencySearch);
            cards.forEach(card => {
                const symbol = card.querySelector('.company-symbol').textContent.toLowerCase();
                const name = card.querySelector('.company-name').textContent.toLowerCase();

                if (symbol.startsWith(input) || name.startsWith(input)) {
                    card.style.display = '';
                    matchesFound = true;
                } else {
                    card.style.display = 'none';
                }
            });

            if (matchesFound) {
                removeInputErrorStyling(currencySearch);
            } else {
                addInputErrorStyling(currencySearch, null, "Currency", "BDT");
            }
        }
    });
}


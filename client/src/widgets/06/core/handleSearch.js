import lotteryContext from "./context";
const { searchButton, numberInputs, matchesContainer, lockedMessageContainer } = lotteryContext;

export default function initializeSearchButton() {
    searchButton.addEventListener("click", handleSearch);
}

function handleSearch() {
    resetErrorStyles();

    // Empty inputs
    const hasEmpty = checkEmpty();
    if (hasEmpty) return;

    // Duplicate values
    const hasDuplicates = checkDuplicates();
    if (hasDuplicates) return;

    // Invalid values
    const hasInvalid = checkInvalid();
    if (hasInvalid) return;

    // Valid values
    lockedMessageContainer.classList.add("hidden");
    matchesContainer.classList.remove("hidden");
}

function resetErrorStyles() {
    numberInputs.forEach(input => {
        input.classList.remove("error");
        void input.offsetWidth;
    });
}

function checkEmpty() {
    let hasEmpty = false;
    numberInputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("error");
            hasEmpty = true;
        }
    })
    return hasEmpty;
}

function checkDuplicates() {
    const numbers = Array.from(numberInputs).map(input => parseInt(input.value));
    let hasDuplicates = false;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                numberInputs[i].classList.add('error');
                numberInputs[j].classList.add('error');
                hasDuplicates = true;
            }
        }
    }
    return hasDuplicates;
}

function checkInvalid() {
    let hasInvalid = false;

    numberInputs.forEach(input => {
        const value = parseInt(input.value);
        const min = parseInt(input.min);
        const max = parseInt(input.max);

        if (value < min || value > max) {
            input.classList.add("error");
            hasInvalid = true;
        }
    })
    return hasInvalid;
}
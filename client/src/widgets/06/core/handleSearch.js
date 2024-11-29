import lotteryContext from "./context";
const { searchButton, numberInputs, matchesContainer, lockedMessageContainer, content, mainNumbers, specialBall, searchPrompt, noDataPrompt } = lotteryContext;
import { fetchPerfectMatches } from "./data";

export default function initializeSearchButton() {
    searchButton.addEventListener("click", handleSearch);
}

async function handleSearch() {
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
    const userNumbers = {
        game: content.dataset.game,
        mainNumbers: mainNumbers.map(input => input.value),
        specialNumber: specialBall.value
    };
    const matches = await fetchPerfectMatches(userNumbers);

    if (matches.length > 0) {
        console.log(matches);
        lockedMessageContainer.classList.add("hidden");
        matchesContainer.classList.remove("hidden");
        // render matches here
    } else {
        searchPrompt.classList.add("hidden");
        noDataPrompt.classList.remove("hidden");
    }
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
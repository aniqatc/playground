import lotteryContext from "./context";
const { searchButton, numberInputs, matchesContainer, lockedMessageContainer, content, mainNumbers, specialBall } = lotteryContext;
import { fetchMatches } from "./data";

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
        specialNumber: specialBall.value,
    };

    try {
        const matches = await fetchMatches(userNumbers);
        displayMatches(matches, userNumbers);
    } catch (error) {
        console.error('Error fetching matches:', error);
        lotteryContext.updateLockedMessage(true);
    }
}

function displayMatches(matches, userNumbers) {
    if (matches.length === 0) {
        lotteryContext.updateLockedMessage(true);
        return;
    }

    lockedMessageContainer.classList.add("hidden");
    matchesContainer.classList.remove("hidden");
    matchesContainer.innerHTML = "";

    const template = document.createElement('div');
    matches.forEach(match => {
        template.innerHTML += generateMatchCard(match);
    });

    matchesContainer.appendChild(template);
}

function generateMatchCard(match) {
    const drawingDate = new Date(match.drawingDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    const numbersHTML = match.numbers.map(num =>
        `<span class="number${match.matchedNumbers.includes(num) ? '' : ' not-a-match'}">${num}</span>`
    ).join('');

    return `
        <div class="lottery-match-card">
            <h3>
                <i class="fa-solid fa-check-double"></i>
                ${getMatchDescription(match)} on 
                <span class="match-date">${drawingDate}</span>
            </h3>
            <div class="match-content">
                <div class="match-numbers">
                    ${numbersHTML}
                    <span class="special-number${match.megaBallMatch ? '' : ' not-a-match'}">${match.megaBall}</span>
                </div>
                <div class="match-details">
                    <div class="jackpot">Jackpot: <span>${match.jackpot}</span></div>
                    <div class="multiplier">Multiplier: <span>${match.megaplier}x</span></div>
                </div>
            </div>
        </div>
    `;
}

function getMatchDescription({ matchedNumbers, megaBallMatch }) {
    const mainMatches = matchedNumbers.length;

    if (mainMatches === 5 && megaBallMatch) {
        return "Perfect Match";
    }

    return `Matched ${mainMatches} number${mainMatches !== 1 ? 's' : ''}${megaBallMatch ? ' + Mega Ball' : ''}`;
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
    });
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
    });
    return hasInvalid;
}
import lotteryContext from "./context";
const { resetButton, mainNumbers, specialBall, statsContainer, matchesContainer, lockedMessageContainer } = lotteryContext;

export default function initializeResetButton() {
    resetButton.addEventListener("click", resetElements);
}

function resetElements() {
    [...mainNumbers, specialBall].forEach((input) => {
        input.value = "";
        input.classList.remove("error");
    })

    statsContainer.classList.add("hidden");
    matchesContainer.classList.add("hidden");
    lockedMessageContainer.classList.remove("hidden");
}
import lotteryContext from "./context";
const { resetButton, mainNumbers, specialBall, statsContainer, matchesContainer, lockedMessageContainer } = lotteryContext;
export default function initializeResetButton() {
    resetButton.addEventListener("click", resetElements);
}

function resetElements() {
    [...mainNumbers, specialBall].forEach((input) => {
        input.value = "";
    })

    statsContainer.innerHTML = "";
    matchesContainer.innerHTML = "";
    statsContainer.classList.add("hidden");
    matchesContainer.classList.add("hidden");
    lockedMessageContainer.classList.remove("hidden");
}
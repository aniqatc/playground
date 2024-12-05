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

    const visibleContainer = statsContainer.classList.contains("hidden") ? matchesContainer : statsContainer;
    visibleContainer.classList.add("exit");
    setTimeout(() => {
        visibleContainer.classList.add("hidden");
        visibleContainer.classList.remove("exit");
        lockedMessageContainer.classList.remove("hidden");
        lotteryContext.updateLockedMessage(false);
    }, 700);
}
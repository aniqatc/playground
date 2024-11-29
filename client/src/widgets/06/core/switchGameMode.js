import lotteryContext from "./context";

const { switchGameLinks, content, megaballContent, powerballContent, mainNumbers, specialBall, statsContainer, matchesContainer } = lotteryContext;

export default async function initializeSwitchLink() {
    switchGameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            switchGameMode();
            lotteryContext.updateSearchRange();
            lotteryContext.updateLockedMessage(false);
        })
    })
}

function switchGameMode() {
    const currentGame = content.dataset.game;
    content.dataset.game = currentGame === 'megamillion' ? 'powerball' : 'megamillion';
    megaballContent.forEach(el => el.classList.toggle('hidden'));
    powerballContent.forEach(el => el.classList.toggle('hidden'));
    statsContainer.innerHTML = "";
    matchesContainer.innerHTML = "";

    // Update limits
    if (content.dataset.game === 'powerball') {
        mainNumbers.forEach(input => {
            input.max = 69;
            input.value = "";
        });
        specialBall.max = 26;
        specialBall.value = "";
    } else {
        mainNumbers.forEach(input => {
            input.max = 70;
            input.value = "";
        });
        specialBall.max = 25;
        specialBall.value = "";
    }
}
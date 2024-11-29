import lotteryContext from "./context";

const { switchGameLinks, content, megaballContent, powerballContent, mainNumbers, specialBall, searchDateStart, searchDateEnd } = lotteryContext;

export default function initializeSwitchLink() {
    switchGameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            switchGameMode();
        })
    })
}

function switchGameMode() {
    const currentGame = content.dataset.game;
    content.dataset.game = currentGame === 'megamillions' ? 'powerball' : 'megamillions';
    megaballContent.forEach(el => el.classList.toggle('hidden'));
    powerballContent.forEach(el => el.classList.toggle('hidden'));

    // Update limits
    if (content.dataset.game === 'powerball') {
        mainNumbers.forEach(input => {
            input.max = 69;
            input.value = "";
        });
        specialBall.max = 26;
        specialBall.value = "";
        searchDateStart.textContent = "04/22/1992";
        searchDateEnd.textContent = "11/16/2024";
    } else {
        mainNumbers.forEach(input => {
            input.max = 70;
            input.value = "";
        });
        specialBall.max = 25;
        specialBall.value = "";
        searchDateStart.textContent = "05/17/2002";
        searchDateEnd.textContent = "11/15/2024";
    }
}
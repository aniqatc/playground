import repoContext from "./context";
import { initializeButtonState } from "./buttonState";
const { repoContainer } = repoContext;

export default function displayCard(data) {
    removePreviousCard();
    initializeButtonState();
}

function removePreviousCard() {
    const prevCard = repoContainer.querySelector(".repo-card");
    if (prevCard) {
        // remove previous card to make space for the next card
    }
}

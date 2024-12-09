import repoContext from "./context";

const { saveButton, randomButton, searchButton, lastAnimatedEl } = repoContext;
const buttons = [saveButton, randomButton, searchButton];

export default function initializeButtonState() {
    lastAnimatedEl.addEventListener('animationend', () => {
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('disabled');
            btn.style.animation = "pop 0.3s ease-in forwards";
        })
    });
}
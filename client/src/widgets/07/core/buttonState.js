import repoContext from "./context";

export default function initializeButtonState() {
    const { saveButton, randomButton, searchButton, lastAnimatedEl } = repoContext;
    const buttons = [saveButton, randomButton, searchButton];

    lastAnimatedEl.addEventListener('animationend', () => {
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('disabled');
            btn.style.animation = "pop 0.3s ease-in forwards";
        })
    });
}
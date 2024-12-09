import repoContext from "./context";

const { saveButton, randomButton, searchButton, lastAnimatedEl } = repoContext;
const buttons = [saveButton, randomButton, searchButton];

function initializeButtonState() {
    lastAnimatedEl.addEventListener('animationend', () => {
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('disabled');
            btn.style.animation = "pop 0.3s ease-in forwards";
        })
    });
}

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
        btn.style.animation = "none";
    })
}

export { initializeButtonState, disableButtons };
import repoContext from "./context";

const { saveButton, randomButton, searchButton, widget } = repoContext;
const buttons = [saveButton, randomButton, searchButton];

function initializeButtonState() {
    const lastAnimatedEl = widget.querySelector(".bar.last-animated");
    if (lastAnimatedEl) {
        lastAnimatedEl.addEventListener('animationend', () => {
            enableButtons();
        }, { once: true });
    }
}

function enableButtons() {
    buttons.forEach(btn => {
        btn.classList.remove('disabled');
        btn.style.animation = "pop 0.3s ease-in forwards";
        btn.disabled = false;
    })
}

function disableButtons() {
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        btn.style.animation = "none";
        btn.disabled = true;
    })
}

export { initializeButtonState, disableButtons };
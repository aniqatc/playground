import repoContext from "./context";

const { saveButton, randomButton, searchButton, widget } = repoContext;
const buttons = [saveButton, randomButton, searchButton];

function initializeButtonState() {
    setTimeout(() => {
        const lastAnimatedEl = widget.querySelector(".bar.last-animated");
        if (lastAnimatedEl) {
            lastAnimatedEl.addEventListener('animationend', () => {
                enableButtons();
            }, { once: true });
        }}, 50)
}

function enableButtons() {
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('disabled');
        btn.style.animation = "pop 0.3s ease-in forwards";
    })
}

function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
        btn.style.animation = "none";
    })
}

export { initializeButtonState, disableButtons };
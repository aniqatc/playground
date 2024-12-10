import bookmarkContext from "./core/context";
const { widget } = bookmarkContext;

export function initializeScript() {
    // Temp
    const input = widget.querySelector(".add-input");
    const button = widget.querySelector(".add-btn");

    button.addEventListener("click", () => {
        input.classList.add("error");
    })
    input.addEventListener("input", () => {
        input.classList.remove("error");
    })

    // Scrollbar fix
    const scrollableContainer = widget.querySelector(".bookmark-container");
    const isWindows = navigator.platform.includes('Win');

    if (isWindows) {
        scrollableContainer.classList.add("windows-scrollbar");
    }
}
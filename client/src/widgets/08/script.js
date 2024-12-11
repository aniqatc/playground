import bookmarkContext from "./core/context";
const { widget, bookmarkContainer } = bookmarkContext;

export async function initializeScript() {
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
    if (navigator.platform.includes('Win')) {
        bookmarkContainer.classList.add("windows-scrollbar");
    }
}
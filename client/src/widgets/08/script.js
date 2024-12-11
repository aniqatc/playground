import bookmarkContext from "./core/context";
import initializeAddBookmark from "./core/addBookmark";
const { widget, bookmarkContainer } = bookmarkContext;

export async function initializeScript() {
    initializeAddBookmark();

    // Scrollbar fix
    navigator.platform.includes('Win') ? bookmarkContainer.classList.add("windows-scrollbar") : null;
}
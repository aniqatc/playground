import bookmarkContext from "./core/context";
import initializeAddBookmark from "./core/addBookmark";
const { bookmarkContainer } = bookmarkContext;
import loadBookmarks from "./core/loadBookmarks";

export async function initializeScript() {
    loadBookmarks();
    initializeAddBookmark();

    // Scrollbar fix
    navigator.platform.includes('Win') ? bookmarkContainer.classList.add("windows-scrollbar") : null;
}
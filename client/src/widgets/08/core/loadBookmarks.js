import displayBookmark from "./displayBookmark";
import { fetchBookmarks } from "./data";

export default async function loadBookmarks() {
    const bookmarks = await fetchBookmarks();

    bookmarks.forEach(bookmark => {
        displayBookmark(bookmark);
    });
}
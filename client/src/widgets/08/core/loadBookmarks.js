import displayBookmark from './displayBookmark';
import { fetchBookmarks } from './data';

export default async function loadBookmarks() {
  const bookmarks = await fetchBookmarks();

  bookmarks.forEach((bookmark, index) => {
    displayBookmark(bookmark, index);
  });
}

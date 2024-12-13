import initializeAddBookmark from './core/addBookmark';
import loadBookmarks from './core/loadBookmarks';
import bookmarkContext from './core/context';
const { bookmarkContainer } = bookmarkContext;

export async function initializeScript() {
  loadBookmarks();
  initializeAddBookmark();

  // Scrollbar fix
  navigator.platform.includes('Win') ? bookmarkContainer.classList.add('windows-scrollbar') : null;
}

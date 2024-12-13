import bookmarkContext from './context';
import { addNewBookmark } from './data';
import displayBookmark from './displayBookmark';
const { addButton, addInput, bookmarkContainer } = bookmarkContext;

export default function initializeAddButton() {
  addButton.addEventListener('click', addBookmark);

  addInput.addEventListener('input', () => {
    addInput.classList.remove('error');
  });

  addInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addButton.click();
    }
  });
}

async function addBookmark() {
  const url = addInput.value.trim().toLowerCase();
  addInput.value = '';

  if (!url) {
    addInput.classList.add('error');
    return;
  }

  try {
    const bookmark = await addNewBookmark(url);
    displayBookmark(bookmark);
    addInput.placeholder = 'Bookmark successfully added.';

    bookmarkContainer.scrollTo({
      top: bookmarkContainer.scrollHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    addInput.classList.add('error');
    addInput.placeholder = error.message;
  }
}

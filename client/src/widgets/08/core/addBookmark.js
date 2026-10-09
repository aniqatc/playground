import bookmarkContext from './context';
import { addNewBookmark } from './data';
import displayBookmark from './displayBookmark';
import { announce } from '../../_card';
const { addButton, addInput, bookmarkContainer } = bookmarkContext;

export default function initializeAddButton() {
  addButton.addEventListener('click', addBookmark);

  addInput.addEventListener('input', () => {
    addInput.classList.remove('error');
    addInput.removeAttribute('aria-invalid');
  });

  addInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addButton.click();
    }
  });
}

async function addBookmark() {
  // don't lowercase the whole URL: paths and query strings can be case-sensitive
  const url = addInput.value.trim();
  addInput.value = '';

  if (!url) {
    addInput.classList.add('error');
    addInput.setAttribute('aria-invalid', 'true');
    announce('08', 'Paste a link to share.');
    return;
  }

  try {
    const bookmark = await addNewBookmark(url);
    displayBookmark(bookmark);
    addInput.placeholder = 'Bookmark successfully added.';
    announce('08', 'Bookmark successfully added.');

    addInput.closest('.add-field')?.classList.add('success');
    setTimeout(() => addInput.closest('.add-field')?.classList.remove('success'), 1600);

    bookmarkContainer.scrollTo({
      top: bookmarkContainer.scrollHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    addInput.classList.add('error');
    addInput.setAttribute('aria-invalid', 'true');
    addInput.placeholder = error.message;
    announce('08', error.message);
  }
}

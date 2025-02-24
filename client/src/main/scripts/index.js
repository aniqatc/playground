import '../styles/main.css';
import { loadWidgets } from './content/load';
import { applySavedTheme } from './ui/themeHandler';
import { initializeLikeHandler } from './likes/likeHandler';
import { createAndFetchUser } from './user/userHandler';
import loadingMessage from './ui/loadingMessage';

async function initializeApp() {
  loadingMessage();
  
  await createAndFetchUser();
  loadWidgets();
  applySavedTheme();
  initializeLikeHandler();
}

initializeApp();

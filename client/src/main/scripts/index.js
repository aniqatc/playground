import '../styles/main.css';
import { loadWidgets } from './content/load';
import { applySavedTheme } from './ui/themeHandler';
import { initializeLikeHandler } from './likes/likeHandler';
import { createNewUser } from './user/userHandler';

async function initializeApp() {
  await createNewUser();
  loadWidgets();
  applySavedTheme();
  initializeLikeHandler();
}

initializeApp();

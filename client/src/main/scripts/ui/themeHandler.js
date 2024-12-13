import { initializeScript as ReloadWidget3 } from '../../../widgets/03/script';
import { replayAnimation } from './replayAnimation';

const root = document.documentElement;
const themeToggle = document.querySelector('#theme-btn');

themeToggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  replayAnimation('#text-highlight', 'animate-text-fill');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  ReloadWidget3();
});

function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.classList.toggle('dark', savedTheme === 'dark');
  }
}

export { applySavedTheme };

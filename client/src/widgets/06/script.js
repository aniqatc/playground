import initializeInputsAutocomplete from './core/inputAutocomplete';
import initializeSwitchLink from './core/switchGameMode';
import initializeRandomButton from './core/quickPickNumbers';
import initializeResetButton from './core/handleReset';
import initializeSearchButton from './core/handleSearch';
import { initializeTabs } from './core/handleTabs';

export async function initializeScript() {
  initializeInputsAutocomplete();
  initializeSwitchLink();
  initializeRandomButton();
  initializeResetButton();
  initializeSearchButton();
  initializeTabs();
  initializeGameInfo();
}

// The ⓘ button opens the drawing schedule / number ranges popover
function initializeGameInfo() {
  const wrapper = document.querySelector('#widget-06 .game-info');
  const button = wrapper.querySelector('.game-info-btn');

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = wrapper.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!wrapper.contains(event.target)) {
      wrapper.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}

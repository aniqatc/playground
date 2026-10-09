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
  const panels = wrapper.querySelectorAll('.tooltip');

  // the popover is `inert` while closed so its link isn't a hidden Tab stop
  const setOpen = (isOpen) => {
    wrapper.classList.toggle('open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    panels.forEach((panel) => (panel.inert = !isOpen));
  };

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!wrapper.classList.contains('open'));
  });

  document.addEventListener('click', (event) => {
    if (!wrapper.contains(event.target)) setOpen(false);
  });

  // Escape closes it and returns focus to the ⓘ button
  wrapper.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && wrapper.classList.contains('open')) {
      setOpen(false);
      button.focus();
    }
  });
}

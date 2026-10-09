import todoContext from './context';

const labels = { untagged: 'Untagged', high: 'High', medium: 'Medium', low: 'Low' };

export function initializeTextareaEl() {
  const { textarea, inputContainer, selectOptionButton, selectOptionsList, selectOption } =
    todoContext;
  const menuWrapper = selectOptionsList.parentElement;

  textarea.addEventListener('focus', () => inputContainer.classList.add('focused'));
  textarea.addEventListener('blur', () => inputContainer.classList.remove('focused'));

  // the options list is `inert` while closed, so its buttons aren't reachable with Tab
  const setMenu = (isOpen) => {
    menuWrapper.classList.toggle('active', isOpen);
    selectOptionsList.inert = !isOpen;
    selectOptionButton.setAttribute('aria-expanded', String(isOpen));
  };
  const closeMenu = () => setMenu(false);

  selectOptionButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !menuWrapper.classList.contains('active');
    setMenu(isOpen);
    if (isOpen) selectOptionsList.querySelector('[aria-pressed="true"]')?.focus();
  });

  // Escape closes the menu and puts focus back on the priority button
  menuWrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuWrapper.classList.contains('active')) {
      closeMenu();
      selectOptionButton.focus();
    }
  });

  selectOption.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedValue = option.getAttribute('data-value');

      selectOptionButton.innerHTML = `<span class="prio-dot ${selectedValue}"></span>`;
      selectOptionButton.setAttribute('data-value', selectedValue);
      selectOptionButton.setAttribute('aria-label', `Priority: ${labels[selectedValue]}`);
      selectOption.forEach((el) => el.setAttribute('aria-pressed', String(el === option)));
      closeMenu();
      textarea.focus();
    });
  });

  // close the priority menu when clicking anywhere else
  document.addEventListener('click', (e) => {
    if (!menuWrapper.contains(e.target)) closeMenu();
  });
}

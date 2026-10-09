import todoContext from './context';

const labels = { untagged: 'Untagged', high: 'High', medium: 'Medium', low: 'Low' };

export function initializeTextareaEl() {
  const { textarea, inputContainer, selectOptionButton, selectOptionsList, selectOption } =
    todoContext;
  const menuWrapper = selectOptionsList.parentElement;

  textarea.addEventListener('focus', () => inputContainer.classList.add('focused'));
  textarea.addEventListener('blur', () => inputContainer.classList.remove('focused'));

  const closeMenu = () => {
    menuWrapper.classList.remove('active');
    selectOptionButton.setAttribute('aria-expanded', 'false');
  };

  selectOptionButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menuWrapper.classList.toggle('active');
    selectOptionButton.setAttribute('aria-expanded', String(isOpen));
  });

  selectOption.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedValue = option.getAttribute('data-value');

      selectOptionButton.innerHTML = `<span class="prio-dot ${selectedValue}"></span>`;
      selectOptionButton.setAttribute('data-value', selectedValue);
      selectOptionButton.setAttribute('aria-label', `Priority: ${labels[selectedValue]}`);
      closeMenu();
      textarea.focus();
    });
  });

  // close the priority menu when clicking anywhere else
  document.addEventListener('click', (e) => {
    if (!menuWrapper.contains(e.target)) closeMenu();
  });
}

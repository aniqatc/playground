import todoContext from './context';

export function initializeTextareaEl() {
  const {
    textarea,
    inputContainer,
    taskbarContainer,
    selectOptionButton,
    selectOptionsList,
    selectOption,
    todoDateButton,
  } = todoContext;

  let isSelecting = false;

  selectOptionButton.addEventListener('mousedown', () => {
    isSelecting = true;
  });

  selectOptionsList.addEventListener('mousedown', () => {
    isSelecting = true;
  });

  todoDateButton.addEventListener('mousedown', () => {
    isSelecting = true;
  });

  textarea.addEventListener('focus', () => {
    inputContainer.classList.add('focused');
    taskbarContainer.classList.add('focused');
  });

  textarea.addEventListener('blur', () => {
    if (textarea.value.trim() === '' && !isSelecting) {
      inputContainer.classList.remove('focused');
      taskbarContainer.classList.remove('focused');
    }
    isSelecting = false;
  });

  selectOptionButton.addEventListener('click', () => {
    selectOptionsList.parentElement.classList.toggle('active');
  });

  selectOption.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedValue = option.getAttribute('data-value');
      const selectedText = option.innerHTML;

      selectOptionButton.innerHTML = `${selectedText} <i class="fa-solid fa-angle-down"></i>`;
      selectOptionButton.setAttribute('data-value', selectedValue);

      selectOptionsList.parentElement.classList.remove('active');
    });
  });
}

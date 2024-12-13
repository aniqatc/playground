import todoContext from './context';
import todoActions from './toDoActions';

export function initializeInput() {
  const {
    toDoSelectedDate,
    textarea,
    selectOptionButton,
    toDoAddButton,
    inputContainer,
    todoDateButton,
  } = todoContext;

  const { addToDB } = todoActions;

  toDoAddButton.addEventListener('mousedown', (e) => {
    e.preventDefault();
  });

  toDoAddButton.addEventListener('click', () => {
    const dueDate = toDoSelectedDate ? toDoSelectedDate : Date.now();
    const task = textarea.value;
    const priority = selectOptionButton.getAttribute('data-value');

    if (task && priority) {
      addToDB(task, dueDate, priority);
      textarea.value = '';
      todoDateButton.blur();
    } else {
      inputContainer.classList.add('error');
    }
  });

  textarea.addEventListener('input', () => {
    inputContainer.classList.remove('error');
  });
}

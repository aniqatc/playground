import todoContext from './context';
import todoActions from './toDoActions';
import { getSelectedDate } from './calendar';

export function initializeInput() {
  const { textarea, selectOptionButton, toDoAddButton, inputContainer, todoDateButton } =
    todoContext;

  const { addToDB } = todoActions;

  // keep focus in the textarea when the add button is pressed
  toDoAddButton.addEventListener('mousedown', (e) => {
    e.preventDefault();
  });

  const addTask = () => {
    const task = textarea.value.trim();
    const priority = selectOptionButton.getAttribute('data-value');

    if (task && priority) {
      addToDB(task, getSelectedDate().toISOString(), priority);
      textarea.value = '';
      todoDateButton.blur();
    } else {
      inputContainer.classList.add('error');
    }
  };

  toDoAddButton.addEventListener('click', addTask);

  // Enter adds the task (Shift+Enter still makes a new line)
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addTask();
    }
  });

  textarea.addEventListener('input', () => {
    inputContainer.classList.remove('error');
  });
}

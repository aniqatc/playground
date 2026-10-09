import todoContext from './context';
import flatpickr from 'flatpickr';
import './calendar.scss';

// The due date picked in the calendar. input.js reads it with getSelectedDate()
// when a task is added (before, the picked date was never actually used).
let selectedDate = new Date();

function initializeCalendarEl() {
  const { todoSelectedDate, todoDateButton } = todoContext;

  todoSelectedDate.textContent = formatDate(selectedDate);

  flatpickr(todoDateButton, {
    dateFormat: 'Y-m-d',
    minDate: 'today',
    maxDate: new Date().fp_incr(45),
    disableMobile: true,
    static: true,
    onChange: (selectedDates) => {
      if (selectedDates.length > 0) {
        selectedDate = selectedDates[0];
        todoSelectedDate.textContent = formatDate(selectedDate);
        todoDateButton.setAttribute('aria-label', `Due ${formatDate(selectedDate)}, change due date`);
      }
    },
  });
}

function getSelectedDate() {
  return selectedDate;
}

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export { formatDate, getSelectedDate, initializeCalendarEl };

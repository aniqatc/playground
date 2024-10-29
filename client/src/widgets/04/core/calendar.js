import todoContext from "./context";
import flatpickr from "flatpickr";
import "./calendar.scss";

function initializeCalendarEl() {
  const { todoSelectedDate, todoDateButton } = todoContext;

  todoSelectedDate.textContent = formatDate(new Date());

  flatpickr(todoDateButton, {
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(45),
    disableMobile: true,
    static: true,
    onChange: (selectedDates) => {
      if (selectedDates.length > 0) {
        todoSelectedDate.textContent = formatDate(selectedDates[0]);
      }
    },
  });
}

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export { formatDate, initializeCalendarEl };

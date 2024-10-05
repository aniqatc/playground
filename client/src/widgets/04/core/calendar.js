import todoContext from "./context";
import flatpickr from "flatpickr";
import "./calendar.scss";

function initializeCalendar() {
  todoContext.todoSelectedDate.textContent = formatDate(new Date());

  flatpickr(todoContext.todoDateButton, {
    dateFormat: "Y-m-d",
    minDate: "today",
    maxDate: new Date().fp_incr(45),
    disableMobile: true,
    onChange: (selectedDates) => {
      if (selectedDates.length > 0) {
        todoContext.todoSelectedDate.textContent = formatDate(selectedDates[0]);
      }
    },
  });
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export { initializeCalendar };

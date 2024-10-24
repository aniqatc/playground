import { initializeCalendarEl } from "./core/calendar";
import { initializeTextareaEl } from "./core/textarea";
import { initializeInput } from "./core/input";
import todoActions from "./core/toDoActions";

export function initializeScript() {
  document.addEventListener("DOMContentLoaded", () => {
    initializeCalendarEl();
    initializeTextareaEl();
    initializeInput();
    todoActions.fetchAndDisplayToDos();
  });
}

import { initializeCalendar } from "./core/calendar";
import { initializeToDoElements } from "./core/textarea";

export function initializeScript() {
  document.addEventListener("DOMContentLoaded", () => {
    initializeCalendar();
    initializeToDoElements();
  });
}

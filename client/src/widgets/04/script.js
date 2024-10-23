import { initializeCalendarEl } from "./core/calendar";
import { initializeTextareaEl } from "./core/textarea";

export function initializeScript() {
  document.addEventListener("DOMContentLoaded", () => {
    initializeCalendarEl();
    initializeTextareaEl();
  });
}

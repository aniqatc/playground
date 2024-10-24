import { initializeCalendarEl } from "./core/calendar";
import { initializeTextareaEl } from "./core/textarea";
import { initializeInput } from "./core/input";

export function initializeScript() {
  document.addEventListener("DOMContentLoaded", () => {
    initializeCalendarEl();
    initializeTextareaEl();
    initializeInput();
  });
}

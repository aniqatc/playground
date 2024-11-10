import { initializeCalendarEl } from "./core/calendar";
import { initializeTextareaEl } from "./core/textarea";
import { initializeInput } from "./core/input";
import { displayDefaultTodos } from "./core/examples";
import { initializeFilterTags } from "./core/filter";

export async function initializeScript() {
  initializeCalendarEl();
  initializeTextareaEl();
  initializeInput();
  initializeFilterTags();

  await displayDefaultTodos();
}

import { initializeCalendarEl } from "./core/calendar";
import { initializeTextareaEl } from "./core/textarea";
import { initializeInput } from "./core/input";
import todoActions from "./core/toDoActions";
import { displayDefaultTodos } from "./core/examples";
import { initializeFilterTags} from "./core/filter";

export function initializeScript() {
  document.addEventListener("DOMContentLoaded", async () => {
    initializeCalendarEl();
    initializeTextareaEl();
    initializeInput();
    initializeFilterTags();

    if (localStorage.getItem("userId")) {
      await displayDefaultTodos();
      await todoActions.fetchAndDisplayToDos();
    }
  });
}

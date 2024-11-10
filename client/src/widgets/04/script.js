import { initializeCalendarEl } from "./core/calendar";
import { initializeTextareaEl } from "./core/textarea";
import { initializeInput } from "./core/input";
import { displayDefaultTodos } from "./core/examples";
import { initializeFilterTags } from "./core/filter";
import { createNewUser } from "../../main/scripts/user/userHandler";

export async function initializeScript() {
  document.addEventListener("DOMContentLoaded", async () => {
    initializeCalendarEl();
    initializeTextareaEl();
    initializeInput();
    initializeFilterTags();

    await createNewUser();
    await displayDefaultTodos();
  });
}

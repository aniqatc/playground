import todoContext from "./core/context";
import { initializeCalendar } from "./core/calendar";

export function initializeScript() {
  document.addEventListener("DOMContentLoaded", () => {
    initializeCalendar();

    //
    const textarea = document.querySelector(".todo-input textarea");
    const todoContainer = document.querySelector(".todo-taskbar");
    const container = document.querySelector(".content-head");
    let isSelecting = false;

    // Prevent textarea blur when clicking on custom select
    const selectBtn = document.querySelector(".filter--selected-option");
    const optionsList = document.querySelector(".filter--options-list");
    const options = document.querySelectorAll(".filter--option");

    selectBtn.addEventListener("mousedown", () => {
      isSelecting = true;
    });

    optionsList.addEventListener("mousedown", () => {
      isSelecting = true;
    });

    todoContext.todoDateButton.addEventListener("mousedown", () => {
      isSelecting = true;
    });

    textarea.addEventListener("focus", () => {
      todoContainer.classList.add("focused");
      container.classList.add("focused");
    });

    textarea.addEventListener("blur", () => {
      if (textarea.value.trim() === "" && !isSelecting) {
        todoContainer.classList.remove("focused");
        container.classList.remove("focused");
      }
      isSelecting = false; // Reset flag after blur event
    });

    // Toggle dropdown
    selectBtn.addEventListener("click", () => {
      optionsList.parentElement.classList.toggle("active");
    });

    // Update selected option
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const selectedValue = option.getAttribute("data-value");
        const selectedText = option.innerHTML;
        selectBtn.innerHTML = `${selectedText} <i class="fa-solid fa-angle-down"></i>`;
        selectBtn.setAttribute("data-value", selectedValue);

        // Close dropdown
        optionsList.parentElement.classList.remove("active");
      });
    });
  });
}

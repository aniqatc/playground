import flatpickr from "flatpickr";
import "flatpickr/dist/themes/confetti.css";

export function initializeScript() {
  document.addEventListener("DOMContentLoaded", () => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    document.querySelector(".todo---selected-date").textContent = formattedDate;

    flatpickr(".todo-date-btn", {
      dateFormat: "Y-m-d",
      minDate: "today",
      maxDate: new Date().fp_incr(45),
      onReady: (selectedDates, dateStr, instance) => {
        instance.calendarContainer.style.fontSize = "12px";
      },
      onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
          document.querySelector(".todo---selected-date").textContent =
            selectedDates[0].toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
        }
      },
    });

    const textarea = document.querySelector(".todo-input textarea");
    const todoContainer = document.querySelector(".todo-taskbar");
    const container = document.querySelector(".content-head");
    let isSelecting = false;

    // Prevent textarea blur when clicking on custom select
    const selectBtn = document.querySelector(".filter--selected-option");
    const optionsList = document.querySelector(".filter--options-list");
    const options = document.querySelectorAll(".filter--option");
    const calendarButton = document.querySelector(".todo-date-btn");

    selectBtn.addEventListener("mousedown", () => {
      isSelecting = true;
    });

    optionsList.addEventListener("mousedown", () => {
      isSelecting = true;
    });

    calendarButton.addEventListener("mousedown", () => {
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

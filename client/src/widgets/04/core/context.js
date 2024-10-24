class ToDoContext {
  constructor() {
    this.initializeElements();
  }

  initializeElements() {
    this.widget = document.querySelector("#widget-04");
    // Calendar
    this.todoDateButton = this.widget.querySelector(".todo-date-btn");
    this.todoSelectedDate = this.widget.querySelector(".todo---selected-date");
    // Textarea & Taskbar
    this.inputContainer = this.widget.querySelector(".content-head");
    this.textarea = this.widget.querySelector(".todo-input textarea");
    this.taskbarContainer = this.widget.querySelector(".todo-taskbar");
    this.selectOptionButton = this.widget.querySelector(".filter--selected-option"); // prettier-ignore
    this.selectOptionsList = this.widget.querySelector(".filter--options-list"); // prettier-ignore
    this.selectOption = this.widget.querySelectorAll(".filter--option");
    this.toDoAddButton = this.widget.querySelector(".todo-add-btn");
    // Todo Items
    this.toDoList = this.widget.querySelector(".todo-list");
    // Tag Filters
  }
}

const todoContext = new ToDoContext();
export default todoContext;

class ToDoContext {
  constructor() {
    this.initializeElements();
  }

  initializeElements() {
    this.widget = document.querySelector("#widget-04");
    // Calendar
    this.todoSelectedDate = this.widget.querySelector(".todo---selected-date");
    this.todoDateButton = this.widget.querySelector(".todo-date-btn");
    // Textarea & Taskbar
    // Todo Checkboxes
    // Todo-Specific Taskbar
    // Tag Filters
  }
}

const todoContext = new ToDoContext();
export default todoContext;

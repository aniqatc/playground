import todoContext from "./context";
import { formatDate } from "./calendar";

class ToDoActions {
  constructor() {
    this.initializeExistingToDos();
  }

  // specifically for default todo items :) - temp
  initializeExistingToDos() {
    const allToDoItems = document.querySelectorAll(".todo-item");
    allToDoItems.forEach((item) => {
      const expandBtn = item.querySelector(".todo-item-expand-btn");
      if (expandBtn) {
        expandBtn.addEventListener("click", () => this.toggleTaskbar(item));
      }
    });
  }

  toggleTaskbar(selectedTodo) {
    const allTodos = document.querySelectorAll(".todo-item");
    allTodos.forEach((item) => {
      if (item !== selectedTodo) {
        item.classList.remove("active");
      }
    });
    selectedTodo.classList.toggle("active");
  }

  async fetchAndDisplayToDos() {
    const userId = localStorage.getItem("userId");
    const response = await fetch(
      `${process.env.SERVER}/widget/todos/${userId}`,
    );

    const todos = await response.json();
    todos.forEach((todo) => {
      this.addToDOM(todo);
    });
  }

  addToDB = async (task, dueDate, priority) => {
    const userId = localStorage.getItem("userId");
    const serverURL = process.env.SERVER;

    const response = await fetch(`${serverURL}/widget/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
        dueDate: dueDate,
        priority: priority,
        userRef: userId,
      }),
    });

    const todoData = await response.json();
    this.addToDOM(todoData);
  };

  addToDOM = (todoData) => {
    const { _id, task, dueDate, priority } = todoData;

    const toDoItem = document.createElement("li");
    toDoItem.classList.add("todo-item");
    this.toggleTaskbar(toDoItem);

    toDoItem.innerHTML = `<div class="todo-item--details">
        <input type="checkbox" id="${_id}" />
        <label for="${_id}">
          <div class="todo-item--details-desc">
            <span>${task}</span>
            <span class="todo-item--date">
              <i class="fa-solid fa-hashtag ${priority}-color"></i> ${formatDate(
                dueDate,
              )}
            </span>
          </div>
        </label>
        <button class="todo-item-expand-btn">
          <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
        </button>
      </div>
      <div class="todo-item--actions">
        <button class="archive-btn">
          <i class="fa-solid fa-box-archive"></i> Archive
        </button>
        <button>
          <i class="fa-solid fa-calendar-plus"></i> Delay
        </button>
        <button class="edit-btn">
          <i class="fa-solid fa-pen-to-square"></i> Edit
        </button>
        <button class="delete-btn">
          <i class="fa-solid fa-trash-can"></i> Delete
        </button>
      </div>`;

    todoContext.toDoList.prepend(toDoItem);
    toDoItem.classList.add("fade-in");

    const expandButton = toDoItem.querySelector(".todo-item-expand-btn");
    expandButton.addEventListener("click", () => this.toggleTaskbar(toDoItem));
  };
}

const todoActions = new ToDoActions();
export default todoActions;

import todoContext from "./context";
import { formatDate } from "./calendar";

class ToDoActions {
  constructor() {
    this.initializeExistingToDos();
  }

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
    if (todos && todos.length > 0) {
      todos.forEach((todo) => {
        this.addToDOM(todo);
      });
    }
  }

  addToDB = async (task, dueDate, priority) => {
    const userId = localStorage.getItem("userId");

    const response = await fetch(`${process.env.SERVER}/widget/todos/`, {
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
    const { _id, task, dueDate, priority, isCompleted, isArchived } = todoData;

    const toDoItem = document.createElement("li");
    toDoItem.classList.add("todo-item");
    this.toggleTaskbar(toDoItem);
    if (isArchived) toDoItem.classList.add("archived");

    toDoItem.innerHTML = `<div class="todo-item--details">
        <input type="checkbox" id="${_id}" 
        ${isCompleted ? "checked" : ""} 
        ${isArchived ? "checked disabled" : ""} 
        />
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
        ${
          isArchived
            ? `<button class="delete-btn">
         <i class="fa-solid fa-trash-can"></i>
       </button>`
            : ""
        }
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

    if (isArchived) {
      todoContext.toDoList.append(toDoItem);
    } else {
      todoContext.toDoList.prepend(toDoItem);
    }
    toDoItem.classList.add("fade-in");

    const checkbox = document.getElementById(_id);
    checkbox.addEventListener("change", () =>
      this.toggleCompletion(_id, checkbox.checked),
    );

    const expandButton = toDoItem.querySelector(".todo-item-expand-btn");
    if (expandButton) {
      expandButton.addEventListener("click", () =>
        this.toggleTaskbar(toDoItem),
      );
    }

    const archiveButton = toDoItem.querySelector(".archive-btn");
    if (archiveButton) {
      archiveButton.addEventListener("click", () =>
        this.archiveToDo(_id, toDoItem),
      );
    }

    const delayButton = toDoItem.querySelector(".delay-btn");
    if (delayButton) {
      delayButton.addEventListener("click", () => this.delayToDo(_id));
    }

    const editButton = toDoItem.querySelector(".edit-btn");
    if (editButton) {
      editButton.addEventListener("click", () => this.editToDo(_id, toDoItem));
    }

    const deleteButton = toDoItem.querySelector(".delete-btn");
    if (deleteButton) {
      deleteButton.addEventListener("click", () =>
        this.deleteToDo(_id, toDoItem),
      );
    }
  };

  toggleCompletion = async (todoId, isCompleted) => {
    const response = await fetch(
      `${process.env.SERVER}/widget/todos/complete/${todoId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted }),
      },
    );
  };

  archiveToDo = async (todoId, toDoItem) => {
    const response = await fetch(
      `${process.env.SERVER}/widget/todos/archive/${todoId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isArchived: true, isCompleted: true }),
      },
    );
    const updatedTodo = await response.json();
    todoContext.toDoList.appendChild(toDoItem);
    toDoItem.classList.add("archived");

    const checkbox = document.getElementById(todoId);
    if (checkbox) {
      checkbox.setAttribute("checked", "true");
      checkbox.setAttribute("disabled", "true");
    }

    toDoItem.querySelector(".todo-item--details").innerHTML +=
      `<button class="delete-btn">
    <i class="fa-solid fa-trash-can"></i>
    </button>`;
  };

  delayToDo = (todoId) => {
    // delay
  };

  editToDo = (todoId, toDoItem) => {
    // edit
  };

  deleteToDo = async (todoId, toDoItem) => {
    const response = await fetch(
      `${process.env.SERVER}/widget/todos/${todoId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    toDoItem.remove();
  };
}

const todoActions = new ToDoActions();
export default todoActions;

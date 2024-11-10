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
      this.setInitialActiveTodo();
    }
  }

  setInitialActiveTodo() {
    const allTodos = document.querySelectorAll(".todo-item");
    const firstNonArchivedTodo = Array.from(allTodos).find(
      (todo) => !todo.classList.contains("archived"),
    );

    if (firstNonArchivedTodo) {
      firstNonArchivedTodo.classList.add("active");
    }
  }

  addToDB = async (task, dueDate, priority, isArchived = false, isCompleted = false) => {
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
        isArchived: isArchived,
        isCompleted: isCompleted,
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
    if (isArchived) toDoItem.classList.add("archived");

    toDoItem.innerHTML = `<div class="todo-item--details">
      <input type="checkbox" id="${_id}" 
      ${isCompleted ? "checked" : ""} 
      ${isArchived ? "checked disabled" : ""} 
      />
      <label for="${_id}">
        <div class="todo-item--details-desc">
          <span class="todo-item--task">${task}</span>
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
      <button class="delay-btn">
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

    // Add event listeners
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
      delayButton.addEventListener("click", () =>
        this.delayToDo(_id, toDoItem, priority),
      );
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

    const deleteButton = toDoItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () =>
      this.deleteToDo(todoId, toDoItem),
    );
  };

  delayToDo = async (todoId, toDoItem, priority) => {
    const response = await fetch(
      `${process.env.SERVER}/widget/todos/find/${todoId}`,
    );
    const todo = await response.json();
    const currentDueDate = new Date(todo.dueDate);
    const updatedDueDate = new Date(
      currentDueDate.setDate(currentDueDate.getDate() + 1),
    );

    const updateResponse = await fetch(
      `${process.env.SERVER}/widget/todos/update/${todoId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dueDate: updatedDueDate.toISOString() }),
      },
    );
    const updatedTodo = await updateResponse.json();
    toDoItem.querySelector(".todo-item--date").innerHTML =
      `<i class="fa-solid fa-hashtag ${priority}-color"></i> ${formatDate(
        updatedTodo.dueDate,
      )}`;
  };

  editToDo = async (todoId, toDoItem) => {
    const toDoItemTask = toDoItem.querySelector(".todo-item--task");
    const editButton = toDoItem.querySelector(".edit-btn");

    const saveTask = async (updatedTask) => {
      toDoItemTask.innerHTML = "";

      const span = document.createElement("span");
      span.classList.add("todo-item--task");
      span.textContent = updatedTask;
      toDoItemTask.appendChild(span);
      editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit`;

      // Update in the DB
      await this.updateTaskInDB(todoId, updatedTask);
    };

    if (editButton.textContent.trim() === "Edit") {
      const currentTask = toDoItemTask.textContent;
      const textarea = document.createElement("textarea");
      toDoItemTask.innerHTML = "";
      textarea.value = currentTask;
      textarea.rows = 2;
      textarea.maxLength = 75;
      toDoItemTask.appendChild(textarea);
      editButton.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Save`;

      async function clickOutsideEdit(event) {
        if (
          !toDoItem.contains(event.target) &&
          toDoItemTask.contains(textarea)
        ) {
          const updatedTask = textarea.value;
          await saveTask(updatedTask);
          document.removeEventListener("click", clickOutsideEdit);
        }
      }

      document.addEventListener("click", clickOutsideEdit);
    } else {
      const updatedTask = toDoItemTask.querySelector("textarea").value;
      await saveTask(updatedTask);
    }
  };

  updateTaskInDB = async (todoId, updatedTask) => {
    const response = await fetch(
      `${process.env.SERVER}/widget/todos/update/${todoId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: updatedTask }),
      },
    );
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

import todoContext from "./context";
import { formatDate } from "./calendar";

class ToDoActions {
  addToDOM(content, date, tag) {
    const toDoItem = document.createElement("li");
    toDoItem.classList.add("todo-item");
    toDoItem.innerHTML = `<div class="todo-item--details">
        <input type="checkbox" id="todo-${date}" />
        <label for="todo-${date}">
          <div class="todo-item--details-desc">
            <span>${content}</span>
            <span class="todo-item--date">
              <i class="fa-solid fa-hashtag ${tag}-color"></i> ${formatDate(
                date,
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
        <button class="edit-btn">
          <i class="fa-solid fa-pen-to-square"></i> Edit
        </button>
        <button class="delete-btn">
          <i class="fa-solid fa-trash-can"></i> Delete
        </button>
      </div>`;
    todoContext.toDoList.prepend(toDoItem);
    toDoItem.classList.add("fade-in");
  }
}

const todoActions = new ToDoActions();
export default todoActions;

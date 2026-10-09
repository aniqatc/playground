import todoContext from './context';
import { formatDate } from './calendar';
import { refreshFilters } from './filter';
import { createAndFetchUser } from '../../../main/scripts/user/userHandler';

const icon = (path, size = 14) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;

const icons = {
  check: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>',
  more: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.8"></circle><circle cx="12" cy="12" r="1.8"></circle><circle cx="19" cy="12" r="1.8"></circle></svg>',
  archive: icon('<rect x="2" y="3" width="20" height="5" rx="1"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"></path>'),
  delay: icon('<rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"></path>'),
  edit: icon('<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"></path>'),
  save: icon('<path d="M20 6 9 17l-5-5"></path>'),
  trash: icon('<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', 15),
};

// Task text comes from visitors, so escape it before putting it into innerHTML.
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

class ToDoActions {
  toggleTaskbar(selectedTodo) {
    todoContext.toDoList.querySelectorAll('.todo-item').forEach((item) => {
      if (item !== selectedTodo) this.setExpanded(item, false);
    });
    this.setExpanded(selectedTodo, !selectedTodo.classList.contains('active'));
  }

  setExpanded(item, expanded) {
    item.classList.toggle('active', expanded);
    const expandBtn = item.querySelector('.todo-item-expand-btn');
    if (expandBtn) expandBtn.setAttribute('aria-expanded', String(expanded));
  }

  async fetchAndDisplayToDos() {
    const userId = await createAndFetchUser();
    const response = await fetch(`${process.env.SERVER}/widget/todos/${userId}`);

    const todos = await response.json();
    if (todos && todos.length > 0) {
      todos.forEach((todo) => this.addToDOM(todo));
    }
    refreshFilters();
  }

  addToDB = async (task, dueDate, priority, isArchived = false, isCompleted = false) => {
    const userId = await createAndFetchUser();
    const response = await fetch(`${process.env.SERVER}/widget/todos/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    refreshFilters();
  };

  rowMarkup({ _id, task, dueDate, priority, isCompleted, isArchived }) {
    return `
      <div class="todo-item--details">
        <input type="checkbox" class="todo-checkbox" id="todo-${_id}"
          ${isCompleted || isArchived ? 'checked' : ''}
          ${isArchived ? 'disabled' : ''} />
        <label class="todo-check" for="todo-${_id}" aria-label="Mark task as complete">${icons.check}</label>
        <div class="todo-item--details-desc">
          <span class="todo-item--task">${escapeHTML(task)}</span>
          <span class="todo-item--date"><span class="prio-dot ${priority}"></span>${formatDate(dueDate)}</span>
        </div>
        ${
          isArchived
            ? `<button type="button" class="delete-btn todo-icon-btn" aria-label="Delete archived task" title="Delete">${icons.trash}</button>`
            : `<button type="button" class="todo-item-expand-btn todo-icon-btn" aria-expanded="false" aria-label="Show task actions">${icons.more}</button>`
        }
      </div>
      <div class="todo-item--actions">
        <div>
          <div class="todo-actions-row">
            <button type="button" class="archive-btn">${icons.archive}Archive</button>
            <button type="button" class="delay-btn" aria-label="Delay task by one day">${icons.delay}Delay</button>
            <button type="button" class="edit-btn">${icons.edit}<span>Edit</span></button>
            <button type="button" class="delete-btn danger">${icons.trash}Delete</button>
          </div>
        </div>
      </div>`;
  }

  addToDOM = (todoData) => {
    const { _id, priority, isArchived } = todoData;

    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-item', 'fade-in');
    toDoItem.dataset.priority = priority;
    toDoItem.dataset.id = _id;
    if (isArchived) toDoItem.classList.add('archived');
    toDoItem.innerHTML = this.rowMarkup(todoData);

    if (isArchived) {
      todoContext.toDoList.append(toDoItem);
    } else {
      todoContext.toDoList.prepend(toDoItem);
    }

    this.bindRow(toDoItem, todoData);
  };

  bindRow(toDoItem, todoData) {
    const { _id } = todoData;
    const checkbox = toDoItem.querySelector('.todo-checkbox');
    checkbox.addEventListener('change', () => {
      this.toggleCompletion(_id, checkbox.checked);
      refreshFilters();
    });

    toDoItem
      .querySelector('.todo-item-expand-btn')
      ?.addEventListener('click', () => this.toggleTaskbar(toDoItem));
    toDoItem.querySelector('.archive-btn')?.addEventListener('click', () => this.archiveToDo(_id, toDoItem));
    toDoItem
      .querySelector('.delay-btn')
      ?.addEventListener('click', () => this.delayToDo(_id, toDoItem, todoData.priority));
    toDoItem.querySelector('.edit-btn')?.addEventListener('click', () => this.editToDo(_id, toDoItem));
    toDoItem.querySelectorAll('.delete-btn').forEach((btn) => {
      btn.addEventListener('click', () => this.deleteToDo(_id, toDoItem));
    });
  }

  toggleCompletion = async (todoId, isCompleted) => {
    await fetch(`${process.env.SERVER}/widget/todos/complete/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted }),
    });
  };

  archiveToDo = async (todoId, toDoItem) => {
    const response = await fetch(`${process.env.SERVER}/widget/todos/archive/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isArchived: true, isCompleted: true }),
    });
    const updated = await response.json().catch(() => ({}));

    // Rebuild the row as an archived row (instead of `innerHTML +=`, which
    // re-parses the row and silently drops every event listener on it)
    const data = {
      _id: todoId,
      task: toDoItem.querySelector('.todo-item--task').textContent,
      dueDate: updated.dueDate || new Date(),
      priority: toDoItem.dataset.priority,
      isCompleted: true,
      isArchived: true,
    };
    toDoItem.classList.remove('active');
    toDoItem.classList.add('archived');
    toDoItem.innerHTML = this.rowMarkup(data);
    this.bindRow(toDoItem, data);
    todoContext.toDoList.appendChild(toDoItem);
    refreshFilters();
  };

  delayToDo = async (todoId, toDoItem, priority) => {
    const response = await fetch(`${process.env.SERVER}/widget/todos/find/${todoId}`);
    const todo = await response.json();
    const currentDueDate = new Date(todo.dueDate);
    const updatedDueDate = new Date(currentDueDate.setDate(currentDueDate.getDate() + 1));

    const updateResponse = await fetch(`${process.env.SERVER}/widget/todos/update/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dueDate: updatedDueDate.toISOString() }),
    });
    const updatedTodo = await updateResponse.json();
    toDoItem.querySelector('.todo-item--date').innerHTML =
      `<span class="prio-dot ${priority}"></span>${formatDate(updatedTodo.dueDate)}`;
  };

  editToDo = async (todoId, toDoItem) => {
    const taskEl = toDoItem.querySelector('.todo-item--task');
    const editButton = toDoItem.querySelector('.edit-btn');
    const editing = taskEl.querySelector('textarea');

    const saveTask = async (updatedTask) => {
      const task = updatedTask.trim() || taskEl.dataset.original;
      taskEl.textContent = task;
      editButton.innerHTML = `${icons.edit}<span>Edit</span>`;
      document.removeEventListener('click', toDoItem.clickOutsideEdit);
      await this.updateTaskInDB(todoId, task);
    };

    if (!editing) {
      const textarea = document.createElement('textarea');
      taskEl.dataset.original = taskEl.textContent;
      textarea.value = taskEl.textContent;
      textarea.rows = 2;
      textarea.maxLength = 75;
      taskEl.textContent = '';
      taskEl.appendChild(textarea);
      textarea.focus();
      editButton.innerHTML = `${icons.save}<span>Save</span>`;

      toDoItem.clickOutsideEdit = async (event) => {
        if (!toDoItem.contains(event.target) && taskEl.contains(textarea)) {
          await saveTask(textarea.value);
        }
      };
      document.addEventListener('click', toDoItem.clickOutsideEdit);
    } else {
      await saveTask(editing.value);
    }
  };

  updateTaskInDB = async (todoId, updatedTask) => {
    await fetch(`${process.env.SERVER}/widget/todos/update/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: updatedTask }),
    });
  };

  deleteToDo = async (todoId, toDoItem) => {
    await fetch(`${process.env.SERVER}/widget/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    toDoItem.remove();
    refreshFilters();
  };
}

const todoActions = new ToDoActions();
export default todoActions;

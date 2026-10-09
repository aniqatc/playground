import './style.scss';
import { card, docsUrl } from '../_card';

const priorities = [
  { value: 'untagged', label: 'Untagged' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

export function getMarkup() {
  return card({
    id: '04',
    title: 'Task manager',
    tags: 'MongoDB · Flatpickr',
    color: { w: '#E0AA00', wf: '#F0B90B', won: '#1A1400' },
    span: 4,
    note: 'Tasks saved per visitor',
    docs: docsUrl('04-todo-list.md'),
    body: `
      <section class="content-head">
        <div class="todo-input">
          <label class="sr-only-text" for="todo-task-input">Task description</label>
          <textarea id="todo-task-input" rows="1" placeholder="What do you need to do?" maxlength="75"></textarea>
          <div class="todo-taskbar">
            <div class="todo-taskbar--select">
              <button type="button" class="filter--selected-option ghost-btn" data-value="untagged" aria-haspopup="true" aria-label="Priority: Untagged" title="Priority">
                <span class="prio-dot untagged"></span>
              </button>
              <div class="filter--options-list" role="menu" aria-label="Priority">
                ${priorities
                  .map(
                    (p) => `
                  <button type="button" role="menuitem" class="filter--option" data-value="${p.value}">
                    <span class="prio-dot ${p.value}"></span>${p.label}
                  </button>`
                  )
                  .join('')}
              </div>
            </div>
            <button type="button" class="todo-date-btn" aria-label="Select due date" title="Due date">
              <span class="todo---selected-date"></span>
            </button>
            <button type="button" class="todo-add-btn" aria-label="Add task">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
            </button>
          </div>
        </div>
      </section>
      <section class="content-footer" aria-label="Filter tasks">
        <div class="todo-tabs" role="group" aria-label="Show">
          <button type="button" class="active" data-tab="all">All <span class="count" data-count="all"></span></button>
          <button type="button" data-tab="completed">Completed <span class="count" data-count="completed"></span></button>
          <button type="button" data-tab="archived">Archived <span class="count" data-count="archived"></span></button>
        </div>
        <div class="todo-priority-filter" role="group" aria-label="Filter by priority">
          <button type="button" data-priority="high" aria-pressed="false" aria-label="Show high priority" title="High"><span class="prio-dot high"></span></button>
          <button type="button" data-priority="medium" aria-pressed="false" aria-label="Show medium priority" title="Medium"><span class="prio-dot medium"></span></button>
          <button type="button" data-priority="low" aria-pressed="false" aria-label="Show low priority" title="Low"><span class="prio-dot low"></span></button>
        </div>
      </section>
      <section class="content-body scroll-area">
        <ul class="todo-list"></ul>
        <p class="todo-empty" hidden>Nothing here yet.</p>
      </section>
    `,
  });
}

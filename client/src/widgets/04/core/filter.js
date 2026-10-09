import todoContext from './context';

/*
 * Tabs (All / Completed / Archived) and the three priority dots work together:
 * the tab picks which tasks to show and a priority dot (optional) narrows it.
 *   All        tasks that aren't archived
 *   Completed  finished tasks that aren't archived
 *   Archived   archived tasks
 */
const state = { tab: 'all', priority: null };

function initializeFilterTags() {
  const { filterContainer } = todoContext;

  filterContainer.addEventListener('click', (event) => {
    // closest() so clicking the count or the dot inside a button still works
    const tabButton = event.target.closest('[data-tab]');
    const priorityButton = event.target.closest('[data-priority]');

    if (tabButton) {
      state.tab = tabButton.dataset.tab;
      filterContainer
        .querySelectorAll('[data-tab]')
        .forEach((btn) => {
          btn.classList.toggle('active', btn === tabButton);
          btn.setAttribute('aria-pressed', String(btn === tabButton));
        });
    }

    if (priorityButton) {
      const value = priorityButton.dataset.priority;
      state.priority = state.priority === value ? null : value;
      filterContainer
        .querySelectorAll('[data-priority]')
        .forEach((btn) => btn.setAttribute('aria-pressed', String(btn.dataset.priority === state.priority)));
    }

    refreshFilters();
  });
}

function matchesTab(item, tab) {
  const isArchived = item.classList.contains('archived');
  const isCompleted = item.querySelector("input[type='checkbox']").checked;

  if (tab === 'archived') return isArchived;
  if (tab === 'completed') return isCompleted && !isArchived;
  return !isArchived;
}

/** Re-applies the current filter and updates the tab counts. Call after any change to the list. */
function refreshFilters() {
  const { toDoList, filterContainer, emptyMessage } = todoContext;
  const items = [...toDoList.querySelectorAll('.todo-item')];
  let visible = 0;

  items.forEach((item) => {
    const show =
      matchesTab(item, state.tab) && (!state.priority || item.dataset.priority === state.priority);
    item.hidden = !show;
    if (show) visible++;
  });

  ['all', 'completed', 'archived'].forEach((tab) => {
    const count = filterContainer.querySelector(`[data-count="${tab}"]`);
    if (count) count.textContent = items.filter((item) => matchesTab(item, tab)).length;
  });

  if (emptyMessage) emptyMessage.hidden = visible > 0;
}

export { initializeFilterTags, refreshFilters };

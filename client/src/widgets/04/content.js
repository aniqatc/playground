import "./style.scss";

export function getMarkup() {
  return `
        <!-- Widget 04: To-Do -->
      <section
        id="widget-04"
        class="relative rounded bg-stone-50 px-3 py-3 shadow-md dark:bg-zinc-800"
      >
        <div
          class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
        >
          <p class="mr-auto">task manager</p>
          <button
            class="like-btn group cursor-pointer"
            aria-label="like button for task manager widget"
          >
            <i class="fa-solid fa-heart group-active:scale-125"></i>
          </button>
          <span class="like-value font-archivo" id="likes-04"></span>
        </div>
        <div class="content">
          <section class="content-head">
            <div class="todo-input">
              <textarea
                placeholder="What do you need to do?"
                maxlength="75"
                aria-label="Enter task description"
              ></textarea>
              <button class="todo-temp-btn" aria-label="Add new task">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="todo-taskbar">
              <div class="todo-taskbar--select">
                <div class="filter--selected-option" data-value="untagged">
                  <i class="fa-solid fa-circle fa-fade untagged-color"></i>
                  Untagged
                  <i class="fa-solid fa-angle-down select-arrow-icon"></i>
                </div>
                <div class="filter--options-list">
                  <div class="filter--option" data-value="untagged">
                    <i class="fa-solid fa-circle untagged-color"></i> Untagged
                  </div>
                  <div class="filter--option" data-value="high">
                    <i class="fa-solid fa-circle high-color"></i> High
                  </div>
                  <div class="filter--option" data-value="medium">
                    <i class="fa-solid fa-circle medium-color"></i> Medium
                  </div>
                  <div class="filter--option" data-value="low">
                    <i class="fa-solid fa-circle low-color"></i> Low
                  </div>
                </div>
              </div>
              <div class="todo---selected-date"></div>
              <div class="todo-taskbar--buttons">
                <button class="todo-date-btn" aria-label="Select due date">
                  <i class="fa-solid fa-calendar-days"></i>
                </button>
                <button class="todo-add-btn" aria-label="Add task">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </section>
          <section class="content-body">
            <ul class="todo-list">
            </ul>
          </section>
          <section class="content-footer">
            <button class="active" aria-label="Show all tasks">All</button>
            <button aria-label="Show archived tasks">Archived</button>
            <button aria-label="Show completed tasks">Completed</button>
            <button aria-label="Show low priority tasks"><i class="fa-solid fa-hashtag low-color"></i>Low</button>
            <button aria-label="Show medium priority tasks">
              <i class="fa-solid fa-hashtag medium-color"></i>Medium
            </button>
            <button aria-label="Show high priority tasks"><i class="fa-solid fa-hashtag high-color"></i>High</button>
          </section>
        </div>
      </section>
`;
}

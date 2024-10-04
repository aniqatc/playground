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
          <p class="mr-auto">todo</p>
          <button
            class="like-btn group cursor-pointer"
            aria-label="like button"
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
              ></textarea>
              <button class="todo-temp-btn">
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
              <div class="todo-taskbar--buttons">
                <button class="todo-date-btn">
                  <i class="fa-solid fa-calendar-days"></i>
                </button>
                <button class="todo-add-btn">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </section>
          <section class="content-body">
            <ul class="todo-list">
              <li class="todo-item active">
                <div class="todo-item--details">
                  <input type="checkbox" id="todo-1" />
                  <label for="todo-1">
                    <div class="todo-item--details-desc">
                      <span
                        >Lorem ipsum blah lorem mapisum ipsum blah lorem mapisum
                        ipsum blah lorem mapisum</span
                      >
                      <span class="todo-item--date">
                        <i class="fa-solid fa-hashtag high-color"></i> Sept
                        24</span
                      >
                    </div>
                  </label>
                  <button class="todo-item-expand-btn">
                    <i
                      class="fa-solid fa-up-right-and-down-left-from-center"
                    ></i>
                  </button>
                </div>
                <div class="todo-item--actions">
                  <button>
                    <i class="fa-solid fa-box-archive"></i> Archive
                  </button>
                  <button>
                    <i class="fa-solid fa-calendar-plus"></i> Delay
                  </button>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button><i class="fa-solid fa-trash-can"></i> Delete</button>
                </div>
              </li>
              <li class="todo-item">
                <div class="todo-item--details">
                  <input type="checkbox" id="todo-4" />
                  <label for="todo-4">
                    <div class="todo-item--details-desc">
                      <span>Lorem ipsum blah lorem mapisum</span>
                      <span class="todo-item--date">
                        <i class="fa-solid fa-hashtag high-color"></i> Sept
                        24</span
                      >
                    </div>
                  </label>
                  <button class="todo-item-expand-btn">
                    <i
                      class="fa-solid fa-up-right-and-down-left-from-center"
                    ></i>
                  </button>
                </div>
                <div class="todo-item--actions">
                  <button>
                    <i class="fa-solid fa-box-archive"></i> Archive
                  </button>
                  <button>
                    <i class="fa-solid fa-calendar-plus"></i> Delay
                  </button>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button><i class="fa-solid fa-trash-can"></i> Delete</button>
                </div>
              </li>
              <li class="todo-item">
                <div class="todo-item--details">
                  <input type="checkbox" id="todo-5" />
                  <label for="todo-5">
                    <div class="todo-item--details-desc">
                      <span>Lorem ipsum blah lorem mapisum</span>
                      <span class="todo-item--date">
                        <i class="fa-solid fa-hashtag high-color"></i> Sept
                        24</span
                      >
                    </div>
                  </label>
                  <button class="todo-item-expand-btn">
                    <i
                      class="fa-solid fa-up-right-and-down-left-from-center"
                    ></i>
                  </button>
                </div>
                <div class="todo-item--actions">
                  <button>
                    <i class="fa-solid fa-box-archive"></i> Archive
                  </button>
                  <button>
                    <i class="fa-solid fa-calendar-plus"></i> Delay
                  </button>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button><i class="fa-solid fa-trash-can"></i> Delete</button>
                </div>
              </li>
              <li class="todo-item">
                <div class="todo-item--details">
                  <input type="checkbox" id="todo-9" />
                  <label for="todo-9">
                    <div class="todo-item--details-desc">
                      <span>Lorem ipsum blah lorem mapisum</span>
                      <span class="todo-item--date">
                        <i class="fa-solid fa-hashtag high-color"></i> Sept
                        24</span
                      >
                    </div>
                  </label>
                  <button class="todo-item-expand-btn">
                    <i
                      class="fa-solid fa-up-right-and-down-left-from-center"
                    ></i>
                  </button>
                </div>
                <div class="todo-item--actions">
                  <button>
                    <i class="fa-solid fa-box-archive"></i> Archive
                  </button>
                  <button>
                    <i class="fa-solid fa-calendar-plus"></i> Delay
                  </button>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button><i class="fa-solid fa-trash-can"></i> Delete</button>
                </div>
              </li>
              <li class="todo-item archived">
                <div class="todo-item--details">
                  <input type="checkbox" id="todo-6" checked disabled />
                  <label for="todo-6">
                    <div class="todo-item--details-desc">
                      <span>Lorem ipsum blah lorem mapisum</span>
                      <span class="todo-item--date">
                        <i class="fa-solid fa-hashtag high-color"></i> Sept
                        24</span
                      >
                    </div>
                  </label>
                  <button class="delete-todo-btn">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </li>
              <li class="todo-item archived">
                <div class="todo-item--details">
                  <input type="checkbox" id="todo-7" checked disabled />
                  <label for="todo-7">
                    <div class="todo-item--details-desc">
                      <span>Lorem ipsum blah lorem mapisum</span>
                      <span class="todo-item--date">
                        <i class="fa-solid fa-hashtag high-color"></i> Sept
                        24</span
                      >
                    </div>
                  </label>
                  <button class="delete-todo-btn">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </li>
            </ul>
          </section>
          <section class="content-footer">
            <button class="active">All</button>
            <button>Archive</button>
            <button>Today</button>
            <button>Upcoming</button>
            <button><i class="fa-solid fa-hashtag low-color"></i>Low</button>
            <button>
              <i class="fa-solid fa-hashtag medium-color"></i>Medium
            </button>
            <button><i class="fa-solid fa-hashtag high-color"></i>High</button>
          </section>
        </div>
      </section>
`;
}

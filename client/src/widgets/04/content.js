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
          <div class="content-body">
            <section class="todo-create-container">
              <div class="todo-create-input">
                <textarea
                  placeholder="What do you need to do?"
                  maxlength="75"
                ></textarea>
              </div>
              <div class="todo-taskbar">
                <div class="custom-select">
                  <div class="selected-option" data-value="untagged">
                    <i class="fa-solid fa-circle fa-fade untagged-color"></i>
                    Untagged
                    <i class="fa-solid fa-angle-down select-arrow-icon"></i>
                  </div>
                  <div class="options-list">
                    <div class="option" data-value="untagged">
                      <i class="fa-solid fa-circle untagged-color"></i> Untagged
                    </div>
                    <div class="option" data-value="high">
                      <i class="fa-solid fa-circle high-color"></i> High
                    </div>
                    <div class="option" data-value="medium">
                      <i class="fa-solid fa-circle medium-color"></i> Medium
                    </div>
                    <div class="option" data-value="low">
                      <i class="fa-solid fa-circle low-color"></i> Low
                    </div>
                  </div>
                </div>
                <div class="tasks-btn-group">
                  <button class="calendar-btn">
                    <i class="fa-solid fa-calendar-days"></i>
                  </button>
                  <button class="add-todo-btn">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </section>
            <section class="todo-list-container">
              <p class="todo-headings">Upcoming</p>
              <ul>
                <li class="todo-item">
                  <input type="checkbox" id="04-01" />
                  <label for="04-01">
                    <div class="todo-item-detail-box">
                      <span class="todo-item-description"
                        >Lorem ipsum blah lorem mapisum</span
                      >
                      <span>
                        <span class="todo-date"
                          ><i class="fa-solid fa-hashtag high-color"></i> Sept
                          24</span
                        >
                      </span>
                    </div>
                  </label>
                  <div class="todo-item-btn-group">
                    <button class="expand-btn">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <button class="todo-edit-btn">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="todo-save-btn">
                      <i class="fa-regular fa-circle-check"></i>
                    </button>
                    <button class="todo-delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="todo-item">
                  <input type="checkbox" id="04-02" />
                  <label for="04-02">
                    <div class="todo-item-detail-box">
                      <span class="todo-item-description"
                        >Lorem ipsum blah lorem mapisum orem ipsum blah lorem
                        mapisum</span
                      >
                      <span>
                        <span class="todo-date"
                          ><i class="fa-solid fa-hashtag low-color"></i> Oct
                          24</span
                        >
                      </span>
                    </div>
                  </label>
                  <div class="todo-item-btn-group">
                    <button class="expand-btn">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <button class="todo-edit-btn">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="todo-save-btn">
                      <i class="fa-regular fa-circle-check"></i>
                    </button>
                    <button class="todo-delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
                <li class="todo-item">
                  <input type="checkbox" id="04-03" />
                  <label for="04-03">
                    <div class="todo-item-detail-box">
                      <span class="todo-item-description"
                        >Lorem ipsum blah lorem mapisum</span
                      >
                      <span>
                        <span class="todo-date"
                          ><i class="fa-solid fa-hashtag low-color"></i> Sept
                          29</span
                        >
                      </span>
                    </div>
                  </label>
                  <div class="todo-item-btn-group">
                    <button class="expand-btn">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <button class="todo-edit-btn">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="todo-save-btn">
                      <i class="fa-regular fa-circle-check"></i>
                    </button>
                    <button class="todo-delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </section>
            <section>
              <p class="todo-headings">Completed</p>
              <ul>
                <li class="todo-item completed-todo-item">
                  <input type="checkbox" id="04-05" checked disabled />
                  <label for="04-05">
                    <div class="todo-item-detail-box">
                      <span class="todo-item-description"
                        >Lorem ipsum blah lorem mapisum</span
                      >
                      <span>
                        <span class="todo-date"
                          ><i class="fa-solid fa-hashtag high-color"></i> Sept
                          24</span
                        >
                      </span>
                    </div>
                  </label>
                </li>
              </ul>
            </section>
          </div>
          <footer class="content-footer">
            <button>Mark All As Completed</button>
            <button>Clear All</button>
          </footer>
        </div>
      </section>
`;
}

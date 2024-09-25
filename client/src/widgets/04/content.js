import "./style.scss";

export function getMarkup() {
  return `
<!-- Widget 04: To-Do -->
<section
  id="widget-04"
  class="relative rounded bg-stone-50 px-3 py-3 shadow-md dark:bg-zinc-800 border border-[#afb4bd] dark:border-zinc-600"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">todo</p>
    <button class="like-btn group cursor-pointer" aria-label="like button">
      <i class="fa-solid fa-heart group-active:scale-125"></i>
    </button>
    <span class="like-value font-archivo" id="likes-04"></span>
  </div>
  <div class="content">
      <div>
          <section>
      <textarea placeholder="What do you need to do?"></textarea>
      <div>
        <button><i class="fa-solid fa-pen-to-square"></i> Priority Custom Select</button>
				<button><i class="fa-solid fa-calendar"></i> Calendar</button>
				<button><i class="fa-solid fa-eye"></i> Add</button>
      </div>
    </section>
    <section>
      <p>Upcoming</p>
      <div>
        <input type="checkbox" id="04-01"/>
        <label for="04-01">
          <span>
            <span>Lorem ipsum blah lorem mapisum</span>
            <span>Sept 24</span>
          </span>
          <button><i class="fa-regular fa-pen-to-square"></i></button>
          <button><i class="fa-regular fa-trash-can"></i></button>
        </label>
      </div>
      <div>
        <input type="checkbox" id="04-01"/>
        <label for="04-01">
          <span>
            <span>Lorem ipsum blah lorem mapisum</span>
            <span>Sept 24</span>
          </span>
          <button><i class="fa-regular fa-pen-to-square"></i></button>
          <button><i class="fa-regular fa-trash-can"></i></button>
        </label>
      </div>
    </section>
    <section>
    <p>Filter by Priority</p>
      <button>Untagged</button>
      <button>High</button>
      <button>Medium</button>
      <button>Low</button>
    </section>
    <section>
        <p>Completed</p>
      <div>
        <input type="checkbox" id="04-01" checked/>
        <label for="04-01">
          <span>
            <span>Lorem ipsum blah lorem mapisum</span>
            <span>Sept 24</span>
          </span>
          <button><i class="fa-regular fa-trash-can"></i></button>
        </label>
      </div>
    </section>
  </div>
      </div>
  <footer>
      <button>Mark All As Completed</button>
      <button>Clear All</button>
  </footer>
</section>
`;
}

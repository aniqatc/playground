import "./style.scss";

export function getMarkup() {
  return `
<!-- Widget 04: To-Do -->
<section
  id="widget-04"
  class="relative rounded bg-stone-50 px-3 py-2 shadow-md dark:bg-zinc-800 border border-[#afb4bd] dark:border-zinc-600"
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
  </div>
</section>
`;
}

import './style.scss';

export function getMarkup() {
    return `<!-- Widget 07: GitHub Line Counter -->
<section
  id="widget-07"
  class="relative h-min rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">repo line count</p>
    <button class="like-btn group cursor-pointer" aria-label="like button">
      <i class="fa-solid fa-heart group-active:scale-125"> </i>
    </button>
    <span class="like-value font-archivo" id="likes-07"></span>
  </div>
  <div class="content">
  <!-- Widget Content Here -->
  </div>
</section>`
}
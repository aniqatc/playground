import './style.scss';

export function getMarkup() {
    return `<!-- Widget 08: Community Bookmarks -->
<section
  id="widget-08"
  class="relative rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">community bookmarks</p>
    <button class="like-btn group cursor-pointer" aria-label="like button for community bookmarks widget">
      <i class="fa-solid fa-heart group-active:scale-125"> </i>
    </button>
    <span class="like-value font-archivo" id="likes-08"></span>
  </div>
<div class="content">
    <section class="content-body">
        <div class="bookmark-container"></div>
    </section>
    <section class="content-footer">
        <input class="add-input" type="text" placeholder="Share a resource with the community">
        <button class="add-btn" aria-label="add bookmark to collection"><i class="fa-solid fa-plus"></i></button>
    </section>
</div>
</section>`
}
import './style.scss';

export function getMarkup() {
  return `<!-- Widget 07: GitHub Repository Card -->
<section
  id="widget-07"
  class="relative rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">repo card</p>
    <button class="like-btn group cursor-pointer" aria-label="like button for github repository card widget">
      <i class="fa-solid fa-heart group-active:scale-125"> </i>
    </button>
    <span class="like-value font-archivo" id="likes-07"></span>
  </div>
  <div class="content">
    <section class="content-header">
        <input class="search-input" type="text" placeholder="Enter valid GitHub repository or profile URL" aria-label="Enter GitHub repository or profile URL"/>
        <button class="search-btn disabled" disabled="true" aria-label="Search GitHub repository or profile"><i class="fas fa-search"></i></button>
    </section>
    <section class="content-body">
    </section>
    <section class="content-footer">
        <button class="random-btn disabled" disabled="true" aria-label="Display a random popular repository"><i class="fa-solid fa-shuffle"></i> Random</button>
        <button class="save-btn disabled" disabled="true" aria-label="Download PNG file of the repository card"><i class="fa-solid fa-download"></i> Download <span>.png</span></button>
    </section>
  </div>
</section>`;
}

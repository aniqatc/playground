import "./style.scss";

export function getMarkup() {
    return `<!-- Widget 05: Financial Markets -->
<section
  id="widget-05"
  class="relative h-min rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">financial markets</p>
    <button class="like-btn group cursor-pointer" aria-label="like button">
      <i class="fa-solid fa-heart group-active:scale-125"> </i>
    </button>
    <span class="like-value font-archivo" id="likes-05"></span>
  </div>
  <div class="content">
    <section class="content-head">
        <button class="top-btn active"><i class="fa-solid fa-star"></i> Top</button>
        <button class="stock-btn">Stocks</button>
        <button class="currency-btn">Currencies</button>
    </section>
    <section class="content-body">
        <div class="top-container active">
            <input type="text" placeholder="Search Company Symbol..." autocomplete="off" class="top-input" />
        </div>
        <div class="stock-container"></div>
        <div class="currency-container"></div>
    </section>
</div>
</section>
`
}
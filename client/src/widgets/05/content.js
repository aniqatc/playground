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
        <button class="stock-btn active"><i class="fa-solid fa-star"></i> Stocks</button>
        <button class="currency-btn">Currencies</button>
        <button class="reset-btn"><i class="fa-solid fa-rotate"></i></button>
    </section>
    <section class="content-body">
        <div class="stock-container active">
            <div class="input-group">
                <input type="text" placeholder="Search Company Symbol..." autocomplete="off" class="stock-input" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div class="card-group"></div>
        </div>
        <div class="currency-container hidden">
            <input type="text" placeholder="Search Currency Symbol..." autocomplete="off" class="currency-input" />
        </div>
    </section>
    <section class="content-footer">
    <i class="fa-solid fa-earth-americas"></i>
    <span class="message">Most Active Stocks as of Nov. 13, 12:12PM</span>
</section>
</div>
</section>
`
}
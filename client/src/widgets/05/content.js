import './style.scss';

export function getMarkup() {
  return `<!-- Widget 05: Financial Markets -->
<section
  id="widget-05"
  class="relative rounded bg-stone-50 px-3 py-2 shadow-md dark:border-zinc-600 dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">financial markets</p>
    <button class="like-btn group cursor-pointer" aria-label="Like financial markets widget">
      <i class="fa-solid fa-heart group-active:scale-125"> </i>
    </button>
    <span class="like-value font-archivo" id="likes-05"></span>
  </div>
  <div class="content">
    <section class="content-head">
        <button class="stock-btn active" aria-label="View stocks tab">
            <i class="fa-solid fa-star"></i> Stocks
        </button>
        <button class="currency-btn" aria-label="View currencies tab">Currencies</button>
        <button class="expandAll-btn" aria-label="Expand all market cards">
            <i class="fa-solid fa-arrows-left-right"></i>
        </button>
    </section>
    <section class="content-body">
        <div class="stock-container">
            <div class="input-group">
                <input 
                    type="text" 
                    placeholder="Search Company Symbol..." 
                    autocomplete="off" 
                    class="stock-input" 
                    aria-label="Search for company stock symbol"
                />
                <button class="stock-search-btn" aria-label="Search for stock">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div class="card-group loading">
                <span>Loading today's popular stocks...</span>
                <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            </div>
        </div>
        <div class="currency-container hidden">
            <div class="input-group">
                <input 
                    type="text" 
                    placeholder="Search Currency Symbol..." 
                    autocomplete="off" 
                    class="currency-input" 
                    aria-label="Search for currency symbol"
                />
            </div>
            <div class="card-group"></div>
        </div>
    </section>
    <section class="content-footer">
        <span class="short-description">Top Actively Traded</span>
        <span class="timestamp-wrapper">
            <i class="fa-solid fa-circle-exclamation"></i>
            <span class="timestamp"></span>
        </span>
    </section>
  </div>
</section>
`;
}

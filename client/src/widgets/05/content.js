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
            <div class="card-group">
                <div class="card">
                    <div class="card-head">
                        <div class="card-heading--name">
                            <span class="logo-wrapper">                            
                            <img src="https://www.google.com/s2/favicons?domain=tesla.com&sz=128"/></span>
                            <h1 class="company-symbol">TSLA</h1>
                            <span class="company-name">Tesla, Inc.</span>
                        </div>
                        <div class="card-heading--price">
                            <div>
                                <span class="company-price--indicator"><i class="fa-solid fa-arrow-trend-up"></i></span>
                                <h1 class="company-price--value">$245.43</h1>
                            </div>
                            <span class="company-price--label">Current Price</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="card-body--details">
                          <li>
                            <span class="card-body--details_value">8204820</span>
                            <span class="card-body--details_label">Volume</span>
                          </li>                          
                          <li>
                            <span class="card-body--details_value">0.4242</span>
                            <span class="card-body--details_label">Change</span>
                          </li>
                          <li>
                            <span class="card-body--details_value">5.3022</span>
                            <span class="card-body--details_label">Change (%)</span>
                          </li>
                          <li>
                            <span class="card-body--details_value">415.20</span>
                            <span class="card-body--details_label">Open</span>
                          </li>
                          <li>
                            <span class="card-body--details_value">210.30</span>
                            <span class="card-body--details_label">Close</span>
                          </li>                          
                          <li>
                            <span class="card-body--details_value">NYSE</span>
                            <span class="card-body--details_label">Exchange</span>
                          </li>
                          <li>
                            <span class="card-body--details_value">514.20</span>
                            <span class="card-body--details_label">Year Low</span>
                          </li>
                          <li>
                            <span class="card-body--details_value">530.21</span>
                            <span class="card-body--details_label">Year High</span>
                          </li>
                        </ul>
                        <div class="card-body--graph"></div>
                    </div>
                    <div class="card-footer">
                    <button class="expand-btn">Details <i class="fa-solid fa-arrow-right-long"></i></button>
</div>
                </div>
            </div>
        </div>
        <div class="stock-container hidden">
            <input type="text" placeholder="Search Company Symbol..." autocomplete="off" class="stock-input" />
        </div>
        <div class="currency-container hidden">
            <input type="text" placeholder="Search Currency Symbol..." autocomplete="off" class="currency-input" />
        </div>
    </section>
</div>
</section>
`
}
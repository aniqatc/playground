import './style.scss';

export function getMarkup() {
  return `
<!-- Widget 02: Calculator -->
      <section
        id="widget-02"
        class="relative rounded  bg-stone-50 px-3 py-2 shadow-md  dark:bg-zinc-800"
      >
        <div
          class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
        >
          <p class="mr-auto">calculator</p>
          <button
            class="like-btn group cursor-pointer"
            aria-label="like button"
          >
            <i class="fa-solid fa-heart group-active:scale-125"></i>
          </button>
          <span class="like-value font-archivo" id="likes-02"></span>
        </div>
        <div class="content">
          <nav class="calc-menu">
            <ul class="options">
              <li>Graphing</li>
              <li class="active">Scientific</li>
            </ul>
            <ul class="toolbar">
              <li>
                <button
                  class="history-btn" title="Toggle History"
                  aria-label="toggle calculation history"
                >
                  <i class="fa-solid fa-arrows-up-down"></i>
                </button>
              </li>
              <li>
                <button class="snap-btn" title="Snap Display" aria-label="screenshot current calculator display">
                  <i class="fa-solid fa-camera"></i>
                </button>
              </li>
              <li>
                <button class="reset-btn" title="Reset Calculator" aria-label="reset display and storage">
                  <i class="fa-solid fa-power-off"></i>
                </button>
              </li>
            </ul>
          </nav>
          <div class="calc-container">
            <div class="display">
              <div class="expressions">
                <div class="graph"></div>
                <ul class="history"></ul>
                <div class="current-val"></div>
              </div>
            </div>
            <div class="calculator">
              <button class="operation-helper-btns" data-calc-val="ac">
                AC
              </button>
              <button class="operation-helper-btns" data-calc-val="(">(</button>
              <button class="operation-helper-btns" data-calc-val=")">)</button>
              <button class="operation-btns" data-calc-val="+" aria-label="addition operator">
                <i class="fa-solid fa-plus"></i>
              </button>
              <button class="operation-btns" data-calc-val="3.14159265359">
                π
              </button>
              <button class="graphing-btns operation-btns" data-calc-val="x" disabled>
                x
              </button>
              <button class="num-btns" data-calc-val="7">7</button>
              <button class="num-btns" data-calc-val="8">8</button>
              <button class="num-btns" data-calc-val="9">9</button>
              <button class="operation-btns" data-calc-val="-" aria-label="subtract operator">
                <i class="fa-solid fa-minus"></i>
              </button>
              <button class="operation-btns" data-calc-val="^">
                x<sup>y</sup>
              </button>
              <button class="graphing-btns" data-calc-val="sin" disabled>
                sin
              </button>
              <button class="num-btns" data-calc-val="4">4</button>
              <button class="num-btns" data-calc-val="5">5</button>
              <button class="num-btns" data-calc-val="6">6</button>
              <button class="operation-btns" data-calc-val="*" aria-label="multiply operator">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button class="operation-btns" data-calc-val="√">√</button>
              <button class="graphing-btns" data-calc-val="log" disabled>
                log
              </button>
              <button class="num-btns" data-calc-val="1">1</button>
              <button class="num-btns" data-calc-val="2">2</button>
              <button class="num-btns" data-calc-val="3">3</button>
              <button class="operation-btns" data-calc-val="/" aria-label="divide operator">
                <i class="fa-solid fa-divide"></i>
              </button>
              <button class="operation-btns" data-calc-val="%" aria-label="convert to percentage">
                <i class="fa-solid fa-percent"></i>
              </button>
              <button class="graphing-btns" data-calc-val="cos" disabled>
                cos
              </button>
              <button class="num-btns" data-calc-val="0">0</button>
              <button class="operation-helper-btns" data-calc-val=".">.</button>
              <button class="operation-helper-btns" data-calc-val="trim" aria-label="remove decimals by rounding">
                <i class="fa-solid fa-scissors"></i>
              </button>
              <button class="operation-btns active" data-calc-val="=" aria-label="evaluate expression">
                <i class="fa-solid fa-equals"></i>
              </button>
              <button class="graphing-btns" data-calc-val="graph" aria-label="generate graph" disabled>
                <i class="fa-solid fa-chart-line"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
`;
}

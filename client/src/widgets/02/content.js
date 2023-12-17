import "./style.scss";

export function getMarkup() {
  return `
<!-- Widget 02: Calculator -->
<section
  id="widget-02"
  class="relative rounded bg-stone-50 px-3 py-2 shadow-md dark:bg-zinc-800"
>
  <div
    class="absolute -bottom-6 -ml-3 flex w-full justify-between gap-1 text-sm text-gray-500 dark:text-slate-400"
  >
    <p class="mr-auto">calculator</p>
    <button class="like-btn group cursor-pointer">
      <i
        class="fa-solid fa-heart group-active:scale-125"
      >
      </i>
    </button>
    <span class="like-value font-archivo" id="likes-02"></span>
  </div>
    <div class="content">
        <div class="display">
            <button class="expand-history-btn"><i class="fa-solid fa-arrows-up-down"></i></button>
            <div class="expressions">
                <ul class="history">
                <li>10 x 10</li>
                <li>2010 + 9 - (5 + 9)</li>
                <li>(200 + 9) * 2</li>
            </ul>
            <p class="current-val">209</p>
            </div>
        </div>
        <div class="calculator">
          <button class="operation-helper-btns" data-calc-val="ac">AC</button>
          <button class="operation-helper-btns" data-calc-val="(">(</button>
          <button class="operation-helper-btns" data-calc-val=")">)</button>
          <button class="operation-btns" data-calc-val="+"><i class="fa-solid fa-plus"></i></button>
          <button class="operation-btns" data-calc-val="pi">π</button>
          <button class="num-btns" data-calc-val="7">7</button>
          <button class="num-btns" data-calc-val="8">8</button>
          <button class="num-btns" data-calc-val="9">9</button>
          <button class="operation-btns" data-calc-val="-"><i class="fa-solid fa-minus"></i></button>
           <button class="operation-btns" data-calc-val="^">^</button>
          <button class="num-btns" data-calc-val="4">4</button>
          <button class="num-btns" data-calc-val="5">5</button>
          <button class="num-btns" data-calc-val="6">6</button>
          <button class="operation-btns" data-calc-val="*"><i class="fa-solid fa-xmark"></i></button>
          <button class="operation-btns" data-calc-val="√">√</button>
          <button class="num-btns" data-calc-val="1">1</button>
          <button class="num-btns" data-calc-val="2">2</button>
          <button class="num-btns" data-calc-val="3">3</button>
          <button class="operation-btns" data-calc-val="/"><i class="fa-solid fa-divide"></i></button>
          <button class="operation-btns" data-calc-val="e">e</button>
          <button class="num-btns" data-calc-val="0">0</button>
          <button class="operation-helper-btns" data-calc-val=".">.</button>
          <button class="operation-helper-btns" data-calc-val="%"><i class="fa-solid fa-percent"></i></button>
          <button class="operation-btns" data-calc-val="="><i class="fa-solid fa-equals"></i></button>
        </div>
    </div>
</section>
`;
}

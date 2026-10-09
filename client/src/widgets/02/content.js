import './style.scss';
import { card, docsUrl } from '../_card';

const icon = (path, size = 16) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;

export function getMarkup() {
  return card({
    id: '02',
    title: 'Calculator',
    tags: 'expr-eval · function-plot · html2canvas',
    color: { w: '#E5484D', wf: '#C8323A', won: '#FFFFFF' },
    span: 4,
    docs: docsUrl('02-calculator.md'),
    body: `
      <nav class="calc-menu" aria-label="Calculator controls">
        <div class="options" role="group" aria-label="Calculator mode">
          <span class="pill" aria-hidden="true"></span>
          <button type="button" class="active">Scientific</button>
          <button type="button">Graphing</button>
        </div>
        <div class="toolbar">
          <button type="button" class="ghost-btn history-btn" title="Toggle history" aria-label="Toggle calculation history">
            ${icon('<path d="m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16"></path>')}
          </button>
          <button type="button" class="ghost-btn snap-btn" title="Snap display" aria-label="Save the calculator display as a .png">
            ${icon('<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle>')}
          </button>
          <button type="button" class="ghost-btn reset-btn" title="Reset calculator" aria-label="Reset display and history">
            ${icon('<path d="M12 2v10M18.4 6.6a9 9 0 1 1-12.77.04"></path>')}
          </button>
        </div>
      </nav>
      <div class="calc-container">
        <div class="display">
          <div class="expressions" aria-live="polite">
            <div class="graph"></div>
            <ul class="history" aria-label="History"></ul>
            <div class="current-val"></div>
          </div>
        </div>
        <div class="calculator">
          <button class="operation-helper-btns" data-calc-val="ac" aria-label="All clear">AC</button>
          <button class="operation-helper-btns" data-calc-val="(">(</button>
          <button class="operation-helper-btns" data-calc-val=")">)</button>
          <button class="operation-btns" data-calc-val="+" aria-label="Add">+</button>
          <button class="operation-btns" data-calc-val="3.14159265359" aria-label="Pi">π</button>
          <button class="graphing-btns" data-calc-val="x" aria-label="Variable x" disabled>x</button>

          <button class="num-btns" data-calc-val="7">7</button>
          <button class="num-btns" data-calc-val="8">8</button>
          <button class="num-btns" data-calc-val="9">9</button>
          <button class="operation-btns" data-calc-val="-" aria-label="Subtract">−</button>
          <button class="operation-btns" data-calc-val="^" aria-label="Power">x<sup>y</sup></button>
          <button class="graphing-btns" data-calc-val="sin" disabled>sin</button>

          <button class="num-btns" data-calc-val="4">4</button>
          <button class="num-btns" data-calc-val="5">5</button>
          <button class="num-btns" data-calc-val="6">6</button>
          <button class="operation-btns" data-calc-val="*" aria-label="Multiply">×</button>
          <button class="operation-btns" data-calc-val="√" aria-label="Square root">√</button>
          <button class="graphing-btns" data-calc-val="log" disabled>log</button>

          <button class="num-btns" data-calc-val="1">1</button>
          <button class="num-btns" data-calc-val="2">2</button>
          <button class="num-btns" data-calc-val="3">3</button>
          <button class="operation-btns" data-calc-val="/" aria-label="Divide">÷</button>
          <button class="operation-btns" data-calc-val="%" aria-label="Convert to percentage">%</button>
          <button class="graphing-btns" data-calc-val="cos" disabled>cos</button>

          <button class="num-btns" data-calc-val="0">0</button>
          <button class="operation-helper-btns" data-calc-val="." aria-label="Decimal point">.</button>
          <button class="operation-helper-btns" data-calc-val="trim" aria-label="Remove decimals by rounding">
            ${icon('<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"></path>')}
          </button>
          <button class="operation-btns active" data-calc-val="=" aria-label="Evaluate expression">=</button>
          <button class="graphing-btns" data-calc-val="graph" aria-label="Generate graph" disabled>
            ${icon('<path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path>', 17)}
          </button>
        </div>
      </div>
    `,
  });
}

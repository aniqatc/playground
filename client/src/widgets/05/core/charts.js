import { fetchChartData } from './data';
import { Chart } from 'chart.js/auto';

// Charts currently on screen, so they can be redrawn in the new colors when
// the theme changes. (Before, every createChart() call added another click
// listener to the theme button, so one click could redraw — and re-fetch —
// the same chart many times.)
const activeCharts = new Map();
// Weekly data doesn't change while the page is open, so fetch it once per symbol
const chartDataCache = new Map();

document.querySelector('#theme-btn')?.addEventListener('click', () => {
  // wait a frame so the `dark` class has been toggled before reading colors
  requestAnimationFrame(() => {
    activeCharts.forEach((stock, cardEl) => {
      if (document.contains(cardEl)) {
        createChart(cardEl, stock);
      } else {
        activeCharts.delete(cardEl);
      }
    });
  });
});

// canvas can't read CSS color-mix(), so turn a hex token into rgba()
function withAlpha(hex, alpha) {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? [...value].map((c) => c + c).join('') : value;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

async function getChartData(symbol) {
  if (!chartDataCache.has(symbol)) {
    const data = await fetchChartData(symbol);
    chartDataCache.set(symbol, [...data].reverse());
  }
  return chartDataCache.get(symbol);
}

export async function createChart(cardEl, stock) {
  const chartCanvas = cardEl.querySelector('.card-body--graph canvas');
  if (!chartCanvas || !stock) return;

  if (chartCanvas.chartInstance) {
    chartCanvas.chartInstance.destroy();
  }

  const chartData = await getChartData(stock.symbol);
  const prices = chartData.map((data) => data.close);
  const dates = chartData.map((data) => new Date(data.date).toLocaleDateString());

  // colors come from the design tokens, so they already match light/dark mode
  const styles = getComputedStyle(cardEl);
  const chartColor = styles.getPropertyValue(stock.change > 0 ? '--up' : '--down').trim();
  const font = "Geist, system-ui, -apple-system, 'Segoe UI', sans-serif";

  chartCanvas.chartInstance = new Chart(chartCanvas.getContext('2d'), {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: '7-Day Trend',
          data: prices,
          borderColor: chartColor,
          backgroundColor: withAlpha(chartColor, 0.14),
          borderWidth: 2.5,
          fill: true,
          pointRadius: 0,
          tension: 0.4,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: chartColor,
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      events: ['mousemove', 'mouseout', 'mouseenter', 'mouseleave'],
      plugins: {
        legend: { display: false },
        tooltip: {
          titleFont: { size: 10, family: font },
          bodyFont: { size: 11, family: font },
          mode: 'nearest',
          intersect: false,
          callbacks: {
            title: (context) => context[0].label,
            label: (context) => `$${context.raw.toFixed(2)}`,
          },
        },
      },
      scales: {
        x: { display: false },
        y: { display: false },
      },
      animation: { duration: 900, easing: 'easeOutQuart' },
    },
  });

  activeCharts.set(cardEl, stock);
  return chartCanvas.chartInstance;
}

export function destroyChart(cardEl) {
  const chartCanvas = cardEl.querySelector('.card-body--graph canvas');
  chartCanvas?.chartInstance?.destroy();
  activeCharts.delete(cardEl);
}

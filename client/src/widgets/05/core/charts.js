import { fetchChartData } from './data';
import { Chart } from 'chart.js/auto';

const themeButton = document.querySelector('#theme-btn');

export async function createChart(cardEl, stock) {
  const chartCanvas = cardEl.querySelector('.card-body--graph canvas');
  if (!chartCanvas || !stock) return;

  if (chartCanvas.chartInstance) {
    chartCanvas.chartInstance.destroy();
  }

  const chartData = await fetchChartData(stock.symbol);
  chartData.reverse();

  const context = chartCanvas.getContext('2d');
  const prices = chartData.map((data) => data.close);
  const dates = chartData.map((data) => new Date(data.date).toLocaleDateString());

  const isDarkMode = document.documentElement.classList.contains('dark');
  const isPositive = stock.change > 0;
  const chartColor = isPositive
    ? isDarkMode
      ? '#88c583'
      : '#105718'
    : isDarkMode
      ? '#ff6363'
      : '#c91b1b';

  chartCanvas.chartInstance = new Chart(context, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: '7-Day Trend',
          data: prices,
          borderColor: chartColor,
          backgroundColor: `${chartColor}33`,
          borderWidth: 3,
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
      events: ['mousemove', 'mouseout', 'mouseenter', 'mouseleave'],
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: !cardEl.classList.contains('initial'),
          align: 'end',
          labels: {
            boxWidth: 0,
            color: chartColor,
            font: {
              size: 11,
              family: "'DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'",
            },
          },
        },
        tooltip: {
          titleFont: {
            size: 10,
            family: "'DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'",
          },
          bodyFont: {
            size: 9,
            family: "'DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'",
          },
          enabled: !cardEl.classList.contains('initial'),
          mode: 'nearest',
          intersect: false,
          callbacks: {
            title: function (context) {
              return context[0].label;
            },
            label: function (context) {
              return `$${context.raw.toFixed(2)}`;
            },
          },
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      animation: true,
    },
  });
  themeButton.addEventListener('click', () => createChart(cardEl, stock));
}

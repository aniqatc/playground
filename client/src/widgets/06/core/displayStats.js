import lotteryContext from './context';
const { lockedMessageContainer, statsContainer } = lotteryContext;

export default function displayStats(stats) {
  if (!stats) {
    lotteryContext.updateLockedMessage(true);
    return;
  }
  lockedMessageContainer.classList.add('hidden');
  statsContainer.classList.remove('hidden');
  statsContainer.innerHTML = generateStatsCard(stats);
}

function generateStatsCard(stats) {
  const numberStatsHTML = stats.numberStatistics
    .map(
      (num) => `
        <div class="number-stat">
          <span class="number">${num.number}</span>
          <div class="stat-details">
            Appeared <strong>${num.frequency}</strong> times
            <span class="percentage">· ${num.percentage.toFixed(1)}% of drawings</span>
          </div>
        </div>`
    )
    .join('');

  return `
    <div class="lottery-stat-card">
      <div class="stats-overview">
        <div class="stat-item">
          <span class="stat-label">Drawings searched</span>
          <span class="stat-value">${stats.drawingsSearched}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Largest jackpot</span>
          <span class="stat-value">${stats.largestJackpot}</span>
        </div>
      </div>
      <div class="number-stats">${numberStatsHTML}</div>
    </div>`;
}

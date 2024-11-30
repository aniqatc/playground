import lotteryContext from "./context";
const { lockedMessageContainer, statsContainer } = lotteryContext;

export default function displayStats(stats) {
    if (!stats) {
        lotteryContext.updateLockedMessage(true);
        return;
    }
    lockedMessageContainer.classList.add("hidden");
    statsContainer.classList.remove("hidden");
    statsContainer.innerHTML = generateStatsCard(stats);
}

function generateStatsCard(stats) {
    let numberStatsHTML = "";
    stats.numberStatistics.forEach(num => {
        numberStatsHTML += `<div class="number-stat">
                    <span class="number">${num.number}</span>
                    <div class="stat-details">
                        <div class="frequency">Appeared: ${num.frequency} times</div>
                        <div class="percentage">In <strong>${num.percentage.toFixed(1)}%</strong> of drawings</div>
                    </div>
                </div>`
    })

    return `<div class="lottery-stat-card">
                <h3>
                <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
                Your Search Analysis
                </h3>
              <div class="stats-overview">
                <div class="stat-item">
                  <span class="stat-label">Drawings Searched</span>
                  <span class="stat-value">${stats.drawingsSearched}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Largest Jackpot</span>
                  <span class="stat-value">${stats.largestJackpot}</span>
                </div>
              </div>
              <div class="number-analysis">
                <h3>
                <i class="fa-solid fa-chart-line"></i>
                Your Numbers Analysis
                </h3>
                   <div class="number-stats">
                    ${numberStatsHTML}
                    </div>
                  </div>
                </div>
            </div>`
}
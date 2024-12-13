import lotteryContext from './context';
const { lockedMessageContainer, matchesContainer, content } = lotteryContext;

export default function displayMatches(matches) {
  if (matches.length === 0) {
    lotteryContext.updateLockedMessage(true);
    return;
  }
  lockedMessageContainer.classList.add('hidden');
  matchesContainer.classList.remove('hidden');
  matchesContainer.innerHTML = '';

  matches.forEach((match) => {
    matchesContainer.innerHTML += generateMatchCard(match);
  });
}

function generateMatchCard(match) {
  const game = content.dataset.game;
  const drawingDate = new Date(match.drawingDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const numbersHTML = match.numbers
    .map(
      (num) =>
        `<span class="number ${match.matchedNumbers.includes(num) ? '' : 'not-a-match'}">${num}</span>`
    )
    .join('');

  return `
        <div class="lottery-match-card">
            <h3><i class="fa-solid fa-check-double"></i> ${getMatchDescription(match, game)} on <span class="match-date">${drawingDate}</span></h3>
            <div class="match-content">
                <div class="match-numbers">
                    ${numbersHTML}
                    <span class="special-number ${match.megaBallMatch ? '' : 'not-a-match'}">${match.megaBall}</span>
                </div>
                <div class="match-details">
                    <div class="jackpot">Jackpot: <span>${match.jackpot}</span></div>
                    <div class="multiplier">Multiplier: ${match.megaplier ? match.megaplier : 1}x</span></div>
                </div>
            </div>
        </div>
    `;
}

function getMatchDescription(match, game) {
  const { matchedNumbers, megaBallMatch } = match;
  const mainMatches = matchedNumbers.length;

  if (mainMatches === 5 && megaBallMatch) {
    return 'Perfect Match';
  }
  if (game === 'megamillion') {
    return `Matched ${mainMatches} number${mainMatches !== 1 ? 's' : ''}${megaBallMatch ? ' + MegaBall' : ''}`;
  } else {
    return `Matched ${mainMatches} number${mainMatches !== 1 ? 's' : ''}${megaBallMatch ? ' + PowerBall' : ''}`;
  }
}

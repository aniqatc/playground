import lotteryContext from './context';
const { lockedMessageContainer, matchesContainer, content } = lotteryContext;

export default function displayMatches(matches) {
  if (matches.length === 0) {
    lotteryContext.updateLockedMessage(true);
    return;
  }
  lockedMessageContainer.classList.add('hidden');
  matchesContainer.classList.remove('hidden');
  // one string instead of `innerHTML +=` per card (which re-parses the list each time)
  matchesContainer.innerHTML = matches.map(generateMatchCard).join('');
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
      <div class="match-head">
        <span class="match-date">${drawingDate}</span>
        <span class="jackpot">${match.jackpot}</span>
      </div>
      <div class="match-numbers">
        ${numbersHTML}
        <span class="special-number ${match.megaBallMatch ? '' : 'not-a-match'}">${match.megaBall}</span>
        <span class="match-summary">${getMatchDescription(match, game)} · ${match.megaplier ? match.megaplier : 1}x</span>
      </div>
    </div>
  `;
}

function getMatchDescription(match, game) {
  const { matchedNumbers, megaBallMatch } = match;
  const mainMatches = matchedNumbers.length;
  const special = game === 'megamillion' ? 'Mega Ball' : 'Powerball';

  if (mainMatches === 5 && megaBallMatch) {
    return 'Perfect match';
  }
  return `${mainMatches}${megaBallMatch ? ` + ${special}` : ''}`;
}

async function fetchSearchRange(game) {
  const response = await fetch(`${process.env.SERVER}/widget/lottery/${game}/range`);
  const data = await response.json();
  return data.dates;
}

async function fetchMatches(numbers) {
  const response = await fetch(`${process.env.SERVER}/widget/lottery/${numbers.game}/matches`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(numbers),
  });
  const { matches } = await response.json();
  return matches;
}

async function fetchStats(numbers) {
  const response = await fetch(`${process.env.SERVER}/widget/lottery/${numbers.game}/stats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(numbers),
  });
  const { stats } = await response.json();
  return stats;
}

export { fetchSearchRange, fetchMatches, fetchStats };

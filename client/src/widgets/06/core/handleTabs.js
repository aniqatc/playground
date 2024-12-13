import lotteryContext from './context';
const { tabs, matchesContainer, statsContainer, searchButton } = lotteryContext;

function initializeTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener('click', switchTab);
  });
}

function switchTab(event) {
  tabs.forEach((tab) => tab.classList.remove('active'));
  const clickedTab = event.currentTarget;
  clickedTab.classList.add('active');

  const currentContainer = statsContainer.classList.contains('hidden')
    ? matchesContainer
    : statsContainer;
  const nextContainer = clickedTab.textContent.includes('Matches')
    ? matchesContainer
    : statsContainer;

  currentContainer.classList.add('exit');
  setTimeout(() => {
    currentContainer.classList.add('hidden');
    currentContainer.classList.remove('exit');
    currentContainer.innerHTML = '';
    nextContainer.innerHTML = '';
    nextContainer.classList.remove('hidden');
    searchButton.click();
  }, 500);
}

function getActiveTab() {
  return Array.from(tabs).find((tab) => tab.classList.contains('active'));
}

export { getActiveTab, initializeTabs };

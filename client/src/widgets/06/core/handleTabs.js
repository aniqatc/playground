import lotteryContext from "./context";
const { tabs, matchesContainer, statsContainer } = lotteryContext;

function initializeTabs() {
    tabs.forEach(tab => {
        tab.addEventListener("click", switchTab);
    })
}

function switchTab(event) {
    tabs.forEach(tab => tab.classList.remove('active'));
    const clickedTab = event.currentTarget;
    clickedTab.classList.add("active");

    if (clickedTab.textContent.includes('Matches')) {
        matchesContainer.classList.remove('hidden');
        statsContainer.classList.add('hidden');
    } else {
        statsContainer.classList.remove('hidden');
        matchesContainer.classList.add('hidden');
    }
}

function getActiveTab() {
    return Array.from(tabs).find(tab => tab.classList.contains('active'));
}

export { getActiveTab, initializeTabs };
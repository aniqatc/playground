import lotteryContext from "./context";
const { tabs, matchesContainer, statsContainer, searchButton } = lotteryContext;

function initializeTabs() {
    tabs.forEach(tab => {
        tab.addEventListener("click", switchTab);
    })
}

function switchTab(event) {
    tabs.forEach(tab => tab.classList.remove('active'));
    const clickedTab = event.currentTarget;
    clickedTab.classList.add("active");
    searchButton.click();

    if (clickedTab.textContent.includes('Matches')) {
        matchesContainer.classList.remove('hidden');
        statsContainer.classList.add('hidden');
        statsContainer.innerHTML = "";
    } else {
        statsContainer.classList.remove('hidden');
        matchesContainer.classList.add('hidden');
        matchesContainer.innerHTML = "";
    }
}

function getActiveTab() {
    return Array.from(tabs).find(tab => tab.classList.contains('active'));
}

export { getActiveTab, initializeTabs };
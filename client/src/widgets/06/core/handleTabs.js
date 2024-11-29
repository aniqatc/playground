import lotteryContext from "./context";
const { tabs, matchesContainer, statsContainer, searchPrompt, noDataPrompt } = lotteryContext;

export default function initializeTabs() {
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
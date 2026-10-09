import { fetchSearchRange } from './data';

class LotteryContext {
  constructor() {
    this.initializeElements();
    this.updateSearchRange();
  }

  initializeElements() {
    this.widget = document.querySelector('#widget-06');
    this.content = this.widget.querySelector('.content');
    // Game content
    this.megaballContent = this.widget.querySelectorAll('.megaball-content');
    this.powerballContent = this.widget.querySelectorAll('.powerball-content');
    // Number Inputs
    this.numberInputs = this.widget.querySelectorAll('.lottery-number-input');
    this.mainNumbers = Array.from(this.widget.querySelectorAll('.lottery-main-numbers input'));
    this.specialBall = this.widget.querySelector('.special-ball');
    // Action buttons
    this.switchGameLinks = this.widget.querySelectorAll('.lottery-switch-link');
    this.randomButton = this.widget.querySelector('.btn-random');
    this.searchButton = this.widget.querySelector('.btn-search');
    this.resetButton = this.widget.querySelector('.lottery-reset-btn');
    // Results
    this.matchesContainer = this.widget.querySelector('.lottery-matches');
    this.statsContainer = this.widget.querySelector('.lottery-stats');
    // Locked Message
    this.lockedMessageContainer = this.widget.querySelector('.lottery-locked-message');
    // Tabs
    this.tabs = this.widget.querySelectorAll('.lottery-tab');
    // Search Dates
    this.searchDateStart = this.widget.querySelector('.search-date-start');
    this.searchDateEnd = this.widget.querySelector('.search-date-end');
  }

  async updateSearchRange() {
    const dates = await fetchSearchRange(this.content.dataset.game);
    this.searchDateStart.textContent = dates.startDate;
    this.searchDateEnd.textContent = dates.endDate;
  }

  updateLockedMessage(boolean) {
    this.lockedMessageContainer.classList.remove('hidden');
    const lock =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';
    const alert =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4M12 16h.01"></path></svg>';
    this.lockedMessageContainer.innerHTML = boolean
      ? `${alert}<span><strong>No matching tickets found.</strong> Try different numbers.</span>`
      : `${lock}<span>Search to <strong>unlock</strong> historical results.</span>`;
  }
}

const lotteryContext = new LotteryContext();
export default lotteryContext;

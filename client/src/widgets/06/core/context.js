class LotteryContext {
    constructor() {
        this.initializeElements();
    }

    initializeElements() {
        this.widget = document.querySelector("#widget-06");
        this.content = this.widget.querySelector(".content");
        // Game content
        this.megaballContent = this.widget.querySelectorAll(".megaball-content");
        this.powerballContent = this.widget.querySelectorAll(".powerball-content");
        // Number Inputs
        this.numberInputs = this.widget.querySelectorAll(".lottery-number-input");
        this.mainNumbers = Array.from(this.widget.querySelectorAll(".lottery-main-numbers input"));
        this.specialBall = this.widget.querySelector(".special-ball");
        // Action buttons
        this.switchGameLinks = this.widget.querySelectorAll(".lottery-switch-link");
        this.randomButton = this.widget.querySelector(".btn-random");
        this.searchButton = this.widget.querySelector(".btn-search");
        this.resetButton = this.widget.querySelector(".lottery-reset-btn");
        // Results
        this.matchesContainer = this.widget.querySelector(".lottery-matches");
        this.statsContainer = this.widget.querySelector(".lottery-stats");
        this.lockedMessageContainer = this.widget.querySelector(".lottery-locked-message");
        // Search Dates
        this.searchDateStart = this.widget.querySelector(".search-date-start");
        this.searchDateEnd = this.widget.querySelector(".search-date-end");
    }
}

const lotteryContext = new LotteryContext();
export default lotteryContext;
class RepoContext {
    constructor() {
        this.initializeElements();
    }

    initializeElements() {
        this.widget = document.querySelector("#widget-07");
        // Content Body
        this.repoContainer = this.widget.querySelector('.content-body');
        // Language Breakdown Section
        this.languageItems = this.widget.querySelectorAll(".language-item");
        // Last Animated Element
        this.lastAnimatedEl = this.widget.querySelector('.last-animated');
        // Action Buttons
        this.saveButton = this.widget.querySelector('.save-btn');
        this.randomButton = this.widget.querySelector('.random-btn');
        this.searchButton = this.widget.querySelector('.search-btn');
        // Search Input
        this.searchInput = this.widget.querySelector('.search-input');
    }
}

const repoContext = new RepoContext();
export default repoContext;
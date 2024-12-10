class BookmarkContext {
    constructor() {
        this.initializeElements();
    }

    initializeElements() {
        this.widget = document.querySelector("#widget-08");
        // Input
        this.addInput = this.widget.querySelector(".add-input");
        this.addButton = this.widget.querySelector(".add-btn");
    }
}

const bookmarkContext = new BookmarkContext();
export default bookmarkContext;
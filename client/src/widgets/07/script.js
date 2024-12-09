import initializeSaveButton from "./core/saveImage";
import initializeButtonState from "./core/buttonState";
import initializeTooltips from "./core/tooltip";
import initializeSearch from "./core/handleSearch";

export async function initializeScript() {
    initializeButtonState();
    initializeSaveButton();
    initializeTooltips();
    initializeSearch();
}
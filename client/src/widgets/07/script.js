import initializeSaveButton from "./core/saveRepoImage";
import initializeButtonState from "./core/buttonState";
import initializeTooltips from "./core/tooltip";

export async function initializeScript() {
    initializeButtonState();
    initializeSaveButton();
    initializeTooltips();
}
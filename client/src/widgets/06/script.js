import initializeInputsAutocomplete from "./core/inputAutocomplete";
import initializeSwitchLink from "./core/switchGameMode";
import initializeRandomButton from "./core/quickPickNumbers";
import initializeResetButton from "./core/reset";

export function initializeScript() {
    initializeInputsAutocomplete();
    initializeSwitchLink();
    initializeRandomButton();
    initializeResetButton();
}

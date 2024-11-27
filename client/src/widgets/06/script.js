import initializeInputsAutocomplete from "./core/inputAutocomplete";
import initializeSwitchLink from "./core/switchGameMode";
import initializeRandomButton from "./core/quickPickNumbers";

export function initializeScript() {
    initializeInputsAutocomplete();
    initializeSwitchLink();
    initializeRandomButton();
}

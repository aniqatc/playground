import initializeInputsAutocomplete from "./core/inputAutocomplete";
import initializeSwitchLink from "./core/switchGameMode";
import initializeRandomButton from "./core/quickPickNumbers";
import initializeResetButton from "./core/handleReset";
import initializeSearchButton from "./core/handleSearch";
import initializeTabs from "./core/handleTabs";

export function initializeScript() {
    initializeInputsAutocomplete();
    initializeSwitchLink();
    initializeRandomButton();
    initializeResetButton();
    initializeSearchButton();
    initializeTabs();
}

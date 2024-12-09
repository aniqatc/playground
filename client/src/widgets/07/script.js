import initializeSaveButton from "./core/saveImage";
import initializeSearch from "./core/handleSearch";
import fetchRepositoryDetails from "./core/data";
import displayCard from "./core/displayCard";
import repoContext from "./core/context";

export async function initializeScript() {
    displayCard( await fetchRepositoryDetails("facebook", "react"));
    initializeSaveButton();
    initializeSearch();

    // Scrollbar Issue
    const isWindows = navigator.platform.includes('Win');
    if (isWindows) {
        repoContext.repoContainer.classList.add('.windows-scrollbar');
    }
}
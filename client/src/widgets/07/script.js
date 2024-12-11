import initializeSaveButton from "./core/saveImage";
import initializeSearch from "./core/handleSearch";
import { fetchRepositoryDetails } from "./core/data";
import displayCard from "./core/displayCard";
import repoContext from "./core/context";
import initializeRandomButton from "./core/showRandom";

export async function initializeScript() {
    displayCard( await fetchRepositoryDetails("facebook", "react"));

    initializeSaveButton();
    initializeRandomButton();
    initializeSearch();

    // Scrollbar Issue
    if (navigator.platform.includes('Win')) {
        repoContext.repoContainer.classList.add('windows-scrollbar');
    }
}
import repoContext from "./context";
import { fetchRepositoryDetails } from "./data";
import displayCard from "./displayCard";
import { disableButtons, enableButtons } from "./buttonState";

export default function initializeSearch() {
    const { searchInput, searchButton } = repoContext;

    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            searchButton.click();
        }
    })

    searchInput.addEventListener("input", () => {
        searchInput.classList.remove("error");
    })

    searchButton.addEventListener("click", async () => {
        try {
            const userInput = searchInput.value.trim().toLowerCase();
            searchInput.value = "";
            if (!userInput) {
                searchInput.classList.add("error");
                return;
            }

            const string = userInput.startsWith('http') ? userInput : `https://${userInput}`;
            const url = new URL(string);
            if (!url.hostname.includes('github.com')) {
                searchInput.classList.add("error");
                return;
            }

            disableButtons();
            const [ owner, repo ] = userInput.split(".com/")[1].split("/");
            const data = await fetchRepositoryDetails(owner, repo);
            displayCard(data);
        } catch (error) {
            searchInput.classList.add("error");
            searchInput.placeholder = "Enter valid GitHub repository or profile URL";
            enableButtons();
        }
    })
}
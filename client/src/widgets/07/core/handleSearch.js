import repoContext from "./context";
import fetchRepositoryDetails from "./data";

export default function initializeSearch() {
    const { searchInput, searchButton } = repoContext;

    searchInput.addEventListener("input", () => {
        searchInput.classList.remove("error");
    })

    searchButton.addEventListener("click", async () => {
        const userInput = searchInput.value.trim().toLowerCase();
        if (!userInput) {
            searchInput.classList.add("error");
            return;
        }

        const string = userInput.startsWith('http') ? userInput : `https://${userInput}`;
        const url = new URL(userInput);
        if (!url.hostname.includes('github.com')) {
            searchInput.classList.add("error");
        }

        const [ owner, repo ] = userInput.split(".com/")[1].split("/");
        const data = await fetchRepositoryDetails(owner, repo);
        console.log(data);
    })
}
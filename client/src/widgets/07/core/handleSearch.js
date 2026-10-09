import repoContext from './context';
import { fetchRepositoryDetails } from './data';
import displayCard from './displayCard';
import { disableButtons, enableButtons } from './buttonState';
import { announce } from '../../_card';

export default function initializeSearch() {
  const { searchInput, searchButton } = repoContext;

  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchButton.click();
    }
  });

  searchInput.addEventListener('input', () => {
    searchInput.classList.remove('error');
    searchInput.removeAttribute('aria-invalid');
  });

  const showError = (message) => {
    searchInput.classList.add('error');
    searchInput.setAttribute('aria-invalid', 'true');
    searchInput.placeholder = message;
    announce('07', message);
  };

  searchButton.addEventListener('click', async () => {
    try {
      const userInput = searchInput.value.trim().toLowerCase();
      searchInput.value = '';
      if (!userInput) {
        showError('Enter a GitHub repository or profile URL');
        return;
      }

      // the field shows a "github.com/" prefix, so people may type just "owner/repo"
      const withHost = userInput.includes('github.com') ? userInput : `github.com/${userInput}`;
      const string = withHost.startsWith('http') ? withHost : `https://${withHost}`;
      const url = new URL(string);
      if (!url.hostname.includes('github.com')) {
        showError('Enter valid GitHub repository or profile URL');
        return;
      }

      disableButtons();
      const [owner, repo] = withHost.split('.com/')[1].split('/');
      const data = await fetchRepositoryDetails(owner, repo);
      displayCard(data);
    } catch (error) {
      showError('Enter valid GitHub repository or profile URL');
      enableButtons();
    }
  });
}

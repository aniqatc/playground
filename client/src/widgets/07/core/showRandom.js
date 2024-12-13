import displayCard from './displayCard';
import { fetchRandomRepository } from './data';
import repoContext from './context';
import { disableButtons } from './buttonState';

export default function initializeRandomButton() {
  const { randomButton } = repoContext;

  randomButton.addEventListener('click', async () => {
    disableButtons();

    const data = await fetchRandomRepository();
    displayCard(data);
  });
}

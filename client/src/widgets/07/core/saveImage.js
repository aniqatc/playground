import { saveSnapshot } from '../../_snapshot';
import repoContext from './context';

export default function initializeSaveButton() {
  const { saveButton, repoContainer } = repoContext;

  saveButton.addEventListener('click', () => {
    saveSnapshot(repoContainer, 'repo-card.png', '07', saveButton, {
      style: {
        maxHeight: 'none',
        overflow: 'visible',
      },
      width: repoContainer.scrollWidth,
      height: repoContainer.scrollHeight,
    });
  });
}

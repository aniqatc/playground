import { toPng } from 'html-to-image';
import repoContext from './context';

export default function initializeSaveButton() {
  const { saveButton, repoContainer } = repoContext;

  saveButton.addEventListener('click', () => {
    toPng(repoContainer, {
      quality: 1,
      pixelRatio: window.devicePixelRatio,
      style: {
        maxHeight: 'none',
        overflow: 'visible',
      },
      width: repoContainer.scrollWidth,
      height: repoContainer.scrollHeight,
    }).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'repo-card.png';
      link.href = dataUrl;
      link.click();
    });
  });
}

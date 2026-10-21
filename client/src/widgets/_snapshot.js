import { toBlob } from 'html-to-image';
import { announce } from './_card';

/*
 * Shared "save as .png" for the calculator and the repo card.
 *
 * Why not html2canvas: it re-implements CSS itself, and v1.4.1 can't read
 * the color(srgb …) values that the v2 color-mix() colors compute to, so it
 * threw before drawing anything. html-to-image lets the browser draw.
 *
 * Why a Blob and not a data: URL: iOS Safari can't open or download a large
 * data: URL from a link (the "View / Download" prompt does nothing), but it
 * handles a real file fine — through the share sheet, or a blob: URL.
 */

// Safari sometimes leaves images and fonts out of the first render, so it
// gets a throwaway warm-up pass. (Chrome on iOS uses WebKit too and says "CriOS".)
const isWebKit = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /CriOS|FxiOS/.test(navigator.userAgent);

/**
 * @param {HTMLElement} node      element to capture
 * @param {string} filename       e.g. 'repo-card.png'
 * @param {string} widgetId       two-digit widget number, for the screen reader message
 * @param {HTMLButtonElement} button  disabled while drawing; shakes if saving fails
 * @param {object} [options]      extra html-to-image options
 */
export async function saveSnapshot(node, filename, widgetId, button, options = {}) {
  const settings = {
    pixelRatio: Math.min(window.devicePixelRatio || 1, 3),
    backgroundColor: getComputedStyle(node).backgroundColor,
    ...options,
  };

  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  try {
    if (isWebKit) await toBlob(node, settings);
    const blob = await toBlob(node, settings);
    if (!blob) throw new Error('Nothing was drawn');

    const file = new File([blob], filename, { type: 'image/png' });

    // phones: the share sheet has "Save Image" / "Save to Files"
    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file] });
        return;
      } catch (error) {
        if (error.name === 'AbortError') return; // closed the share sheet
        // anything else (e.g. the click "expired" while the image was drawn): download instead
      }
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    announce(widgetId, `Saved ${filename}`);
  } catch (error) {
    console.error(`Couldn't save ${filename}`, error);
    announce(widgetId, `Sorry, the image couldn't be saved.`);
    button.classList.remove('save-failed');
    void button.offsetWidth; // restart the shake if it fails twice in a row
    button.classList.add('save-failed');
  } finally {
    button.disabled = false;
    button.removeAttribute('aria-busy');
  }
}

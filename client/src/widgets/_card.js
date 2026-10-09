/*
 * Shared card shell for every widget (v2 design).
 *
 * Each widget's content.js only describes what's different about it — its
 * number, title, color, grid width and inner markup — and this helper wraps
 * it in the same header (number badge + title + tech tags) and footer
 * (like button + optional note + "Build notes" link).
 *
 * Colors are passed as CSS custom properties:
 *   --w   tint used for the card background, borders and soft fills
 *   --wf  strong fill (number badge, primary buttons, like heart)
 *   --won text color that sits on top of --wf
 */

const SPANS = {
  4: 'col-span-12 md:col-span-6 xl:col-span-4',
  5: 'col-span-12 md:col-span-6 xl:col-span-5',
  7: 'col-span-12 md:col-span-6 xl:col-span-7',
  12: 'col-span-12',
};

const heartIcon = `<svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"></path></svg>`;

/**
 * @param {object} options
 * @param {string} options.id        two-digit widget number, e.g. '02'
 * @param {string} options.title     widget name shown in the header
 * @param {string} [options.tags]    short tech list shown on the right of the header
 * @param {{w: string, wf: string, won: string}} options.color
 * @param {4|5|7|12} [options.span]  width on the 12-column grid at desktop size
 * @param {string} [options.note]    short text shown in the footer (hidden on phones)
 * @param {string} [options.docs]    URL for the "Build notes" link
 * @param {string} [options.footerExtra] extra footer markup (e.g. a reset button)
 * @param {string} [options.bodyAttrs] extra attributes for the body element (e.g. data-game)
 * @param {string} options.body      the widget's inner markup
 */
export function card({ id, title, tags = '', color, span = 4, note = '', docs = '', footerExtra = '', bodyAttrs = '', body }) {
  const style = `--w: ${color.w}; --wf: ${color.wf}; --won: ${color.won}`;

  return `
    <section id="widget-${id}" class="widget-card ${SPANS[span]}" style="${style}" aria-labelledby="widget-${id}-title">
      <header class="widget-head">
        <span class="widget-num">${id}</span>
        <h2 id="widget-${id}-title">${title}</h2>
        ${tags ? `<span class="widget-tags">${tags}</span>` : ''}
      </header>
      <div class="widget-body content" ${bodyAttrs}>
        ${body}
      </div>
      <p class="sr-only-text" role="status" data-status="${id}"></p>
      <footer class="widget-foot">
        <button class="like-btn" data-like-btn="${id}" aria-label="Like ${title}">
          <span class="heart">${heartIcon}</span>
          <span class="font-mono" data-like-count="${id}">–</span>
          <span class="plus" aria-hidden="true">+1</span>
        </button>
        ${footerExtra}
        ${note ? `<span class="hidden sm:inline">${note}</span>` : ''}
        ${docs ? `<a class="docs-link" href="${docs}" target="_blank">Build notes <span class="arrow">→</span></a>` : ''}
      </footer>
    </section>
  `;
}

/**
 * Reads a short message out to screen readers (errors, "added", etc.).
 * Visual cues like a red border or a new placeholder aren't announced on their own.
 * @param {string} id  two-digit widget number, e.g. '08'
 */
export function announce(id, message) {
  const region = document.querySelector(`[data-status="${id}"]`);
  if (!region) return;
  // clear first so the same message twice in a row is still read out
  region.textContent = '';
  setTimeout(() => {
    region.textContent = message;
  }, 50);
}

export const docsUrl = (file) => `https://github.com/aniqatc/playground/blob/main/docs/widgets/${file}`;

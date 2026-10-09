import './style.scss';
import { card, docsUrl } from '../_card';

export function getMarkup() {
  return card({
    id: '08',
    title: 'Community bookmarks',
    tags: 'Cheerio · Safe Browsing · Natural · leo-profanity',
    color: { w: '#7B4CC9', wf: '#7B4CC9', won: '#FFFFFF' },
    span: 7,
    note: 'Links are safety-checked and auto-tagged',
    docs: docsUrl('08-bookmarks.md'),
    body: `
      <section class="content-footer">
        <label class="add-field">
          <span class="sr-only-text">Share a link with the community</span>
          <input type="url" class="add-input" placeholder="Share a resource with the community — paste a link" />
          <button type="button" class="add-btn" aria-label="Add bookmark to collection">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
          </button>
        </label>
      </section>
      <section class="content-body">
        <div class="bookmark-container scroll-area"></div>
      </section>
    `,
  });
}

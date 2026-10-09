import './style.scss';
import { card, docsUrl } from '../_card';

export function getMarkup() {
  return card({
    id: '07',
    title: 'Repo card',
    tags: 'Octokit · html-to-image',
    color: { w: '#4F5BFF', wf: '#4352F0', won: '#FFFFFF' },
    span: 5,
    docs: docsUrl('07-gh-card.md'),
    body: `
      <section class="content-header">
        <!-- a div, not a <label>: a button inside a label makes the whole label act like a click on the input -->
        <div class="repo-search">
          <label class="sr-only-text" for="repo-search-input">GitHub repository or profile URL</label>
          <span class="prefix" aria-hidden="true">github.com/</span>
          <input type="text" id="repo-search-input" class="search-input" placeholder="owner/repo" autocomplete="off" />
          <button type="button" class="search-btn disabled" aria-label="Search GitHub repository or profile" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
          </button>
        </div>
      </section>
      <section class="content-body"></section>
      <section class="content-footer">
        <button type="button" class="repo-btn random-btn disabled" aria-label="Display a random popular repository" disabled>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22M18 2l4 4-4 4M2 6h1.9c1.5 0 2.9.9 3.6 2.2M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8M18 14l4 4-4 4"></path></svg>
          Random repo
        </button>
        <button type="button" class="repo-btn save-btn disabled" aria-label="Download PNG file of the repository card" disabled>
          Download .png
        </button>
      </section>
    `,
  });
}

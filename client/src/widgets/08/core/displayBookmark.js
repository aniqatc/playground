import bookmarkContext from './context';
import initializeVoteButtons from './voteButtons';
const { bookmarkContainer } = bookmarkContext;

const chevron = (path) =>
  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"></path></svg>`;

// Titles and descriptions are scraped from other websites, so they must be
// escaped before going into innerHTML.
function escapeHTML(text = '') {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export default function displayBookmark(bookmark, index = 0) {
  const markup = bookmarkHTML(bookmark, index);
  bookmarkContainer.insertAdjacentHTML('beforeend', markup);
  initializeVoteButtons(bookmark);
}

function bookmarkHTML(bookmark, index) {
  const likes = bookmark.likeCount ?? bookmark.likes.length;
  const dislikes = bookmark.dislikeCount ?? bookmark.dislikes.length;
  const author = bookmark.author.includes('.')
    ? bookmark.author.toLowerCase()
    : `@${bookmark.author.toLowerCase()}`;
  const title = escapeHTML(bookmark.title);

  return `
    <div class="bookmark" id="id-${bookmark._id}" ${index ? `style="animation-delay: ${Math.min(index, 8) * 80}ms"` : ''}>
      <div class="bookmark-sidebar" data-likes="${likes}" data-dislikes="${dislikes}">
        <button type="button" class="sidebar--actions--likes-btn" aria-pressed="${bookmark.userVote === 'like'}" aria-label="Upvote ${title}">${chevron('M6 15l6-6 6 6')}</button>
        <span class="bookmark-score" title="${likes} likes · ${dislikes} dislikes">${likes - dislikes}</span>
        <button type="button" class="sidebar--actions--dislikes-btn" aria-pressed="${bookmark.userVote === 'dislike'}" aria-label="Downvote ${title}">${chevron('M6 9l6 6 6-6')}</button>
        <span class="sr-only-text"><span class="sidebar--actions--likes-count">${likes}</span> likes, <span class="sidebar--actions--dislikes-count">${dislikes}</span> dislikes</span>
      </div>
      <a class="bookmark-content" href="${bookmark.url}" target="_blank" rel="noopener noreferrer">
        <span class="bookmark-title">${title}</span>
        <span class="bookmark-author">${escapeHTML(author)}</span>
        <span class="bookmark-description">${escapeHTML(bookmark.description)}</span>
        <span class="bookmark-content--topics">
          ${(bookmark.topics || [])
            .slice(0, 3)
            .map((topic) => `<span class="topic">#${escapeHTML(topic)}</span>`)
            .join('')}
        </span>
      </a>
      <div class="bookmark-content--img" aria-hidden="true">
        <img src="${bookmark.icon}" alt="" loading="lazy" onerror="this.parentElement.classList.add('no-icon'); this.remove();" />
        <span class="fallback">${title.charAt(0)}</span>
      </div>
    </div>`;
}

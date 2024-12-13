import bookmarkContext from './context';
import initializeVoteButtons from './voteButtons';
const { bookmarkContainer } = bookmarkContext;

export default function displayBookmark(bookmark, index = 0) {
  const markup = bookmarkHTML(bookmark, index);
  bookmarkContainer.insertAdjacentHTML('beforeend', markup);
  initializeVoteButtons(bookmark);
}

function bookmarkHTML(bookmark, index) {
  return `<div class="bookmark" id="id-${bookmark._id}" ${index ? `style="animation-delay: ${index * 200}ms"` : ''}>
        <a class="bookmark-content" href="${bookmark.url}" target="_blank" aria-label="Visit ${bookmark.author}" rel="noopener noreferrer">
            <div class="bookmark-content--container">
                <div class="bookmark-content--header">
                    <h2>${bookmark.title}</h2>
                    <span>${!bookmark.author.includes('.') ? `@${bookmark.author.toLowerCase()}` : bookmark.author.toLowerCase()}</span>
                </div>
                <div class="bookmark-content--description">
                    <p>${bookmark.description}</p>
                </div>
                <ul class="bookmark-content--topics">
                    ${
                      bookmark.topics
                        ? bookmark.topics
                            .slice(0, 4)
                            .map((topic) => `<li>#${topic}</li>`)
                            .join('')
                        : ''
                    }
                </ul>
            </div>
            <div class="bookmark-content--img">
                <img src="${bookmark.icon}" alt="${bookmark.title} icon" onerror="this.style.display='none';"/>
            </div>
        </a>
        <div class="bookmark-sidebar">
            <div class="sidebar--actions">
                <div class="sidebar--actions--likes">
                    <button class="sidebar--actions--likes-btn" aria-label="like button for ${bookmark.author}">
                        <i class="fa-${bookmark.userVote === 'like' ? 'solid' : 'regular'} fa-thumbs-up"></i>
                    </button>
                    <span class="sidebar--actions--likes-count">${bookmark.likeCount || bookmark.likes.length}</span>
                </div>
                <div class="sidebar--actions--dislikes">
                    <button class="sidebar--actions--dislikes-btn" aria-label="dislike button for ${bookmark.author}">
                        <i class="fa-${bookmark.userVote === 'dislike' ? 'solid' : 'regular'} fa-thumbs-down"></i>
                    </button>
                    <span class="sidebar--actions--dislikes-count">${bookmark.dislikeCount || bookmark.dislikes.length}</span>
                </div>
            </div>
        </div>
    </div>`;
}

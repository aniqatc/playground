import bookmarkContext from "./context";
const { bookmarkContainer } = bookmarkContext;

export default function displayBookmark(bookmark) {
    const bookmarkEl = bookmarkHTML(bookmark);
    bookmarkContainer.insertAdjacentHTML('afterbegin', bookmarkEl);
    console.log(bookmark);
}

function bookmarkHTML(bookmark) {
    return `<div class="bookmark">
        <a class="bookmark-content" href="${bookmark.url}" target="_blank">
            <div class="bookmark-content--container">
                <div class="bookmark-content--header">
                    <h2>${bookmark.title}</h2>
                    <span>${!bookmark.author.includes(".") ? `@${bookmark.author.toLowerCase()}` : bookmark.author}</span>
                </div>
                <div class="bookmark-content--description">
                    <p>${bookmark.description}</p>
                </div>
                <ul class="bookmark-content--topics">
                    ${bookmark.topics ? bookmark.topics.slice(0, 4).map(topic => `<li>#${topic}</li>`).join('') : ""}
                </ul>
            </div>
            <div class="bookmark-content--img">
                <img src="${bookmark.icon}" alt="${bookmark.title} icon"/>
            </div>
        </a>
        <div class="bookmark-sidebar">
            <div class="sidebar--actions">
                <div class="sidebar--actions--likes">
                    <button class="sidebar--actions--likes-btn ${bookmark._id} ${bookmark.userVote === "like" ? "active" : ""}">
                        <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <span class="sidebar--actions--likes-count">${bookmark.likeCount || bookmark.likes.length}</span>
                </div>
                <div class="sidebar--actions--dislikes">
                    <button class="sidebar--actions--dislikes-btn ${bookmark._id} ${bookmark.userVote === "dislike" ? "active" : ""}">
                        <i class="fa-regular fa-thumbs-down"></i>
                    </button>
                    <span class="sidebar--actions--dislikes-count">${bookmark.dislikeCount || bookmark.dislikes.length}</span>
                </div>
            </div>
        </div>
    </div>`
}
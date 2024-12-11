const userId = localStorage.getItem('userId');

async function fetchBookmarks() {
    const response = await fetch(`${process.env.SERVER}/widget/bookmark/all?userId=${userId}`);
    const data = await response.json();

    return !response.ok ? throw new Error(data.message) : data.bookmarks;
}

async function fetchUserVoteCount(bookmarkId) {
    const response = await fetch(`${process.env.SERVER}/widget/bookmark/all?userId=${userId}?bookmarkId=${bookmarkId}`);
    const data = await response.json();

    return !response.ok ? throw new Error(data.message) : data;
}

async function addNewBookmark(url) {
    const response = await fetch(`${process.env.SERVER}/widget/bookmark/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    });
    const data = await response.json();
    return !response.ok ? throw new Error(data.message) : data;
}

async function addVote(userId, bookmarkId, vote) {
    const response = await fetch(`${process.env.SERVER}/widget/bookmark/${vote}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, bookmarkId: bookmarkId})
    });
    const data = await response.json();
    return !response.ok ? throw new Error(data.message) : data;
}
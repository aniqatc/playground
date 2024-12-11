async function addNewBookmark(url) {
    const response = await fetch(`${process.env.SERVER}/widget/bookmark/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    });
    const data = await response.json();
}

async function addVote(vote, userId) {}

async function fetchBookmarks(userId) {}
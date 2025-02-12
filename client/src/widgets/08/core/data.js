import { createAndFetchUser } from '../../../main/scripts/user/userHandler';

async function fetchBookmarks() {
  const userId = await createAndFetchUser();
  const response = await fetch(`${process.env.SERVER}/widget/bookmark/all?userId=${userId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  return data.bookmarks;
}

async function fetchUserVoteCount(bookmarkId) {
  const userId = await createAndFetchUser();
  const response = await fetch(
    `${process.env.SERVER}/widget/bookmark/count?userId=${userId}&bookmarkId=${bookmarkId}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return {
    likeCount: data.likeCount || 0,
    dislikeCount: data.dislikeCount || 0,
  };
}

async function addNewBookmark(url) {
  const response = await fetch(`${process.env.SERVER}/widget/bookmark/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: url }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

async function addVote(bookmarkId, vote) {
  const userId = await createAndFetchUser();
  const response = await fetch(`${process.env.SERVER}/widget/bookmark/${vote}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId, bookmarkId: bookmarkId }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}

export { addVote, addNewBookmark, fetchBookmarks, fetchUserVoteCount };

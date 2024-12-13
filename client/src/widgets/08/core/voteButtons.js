import bookmarkContext from './context';
const { widget } = bookmarkContext;
import { addVote, fetchUserVoteCount } from './data';

export default async function initializeVoteButtons(bookmark) {
  const el = widget.querySelector(`#id-${bookmark._id}`);
  const likeButton = el.querySelector('.sidebar--actions--likes-btn');
  const dislikeButton = el.querySelector('.sidebar--actions--dislikes-btn');
  const likesCount = el.querySelector('.sidebar--actions--likes-count');
  const dislikesCount = el.querySelector('.sidebar--actions--dislikes-count');
  const likeIcon = likeButton.querySelector('i');
  const dislikeIcon = dislikeButton.querySelector('i');

  likeButton.addEventListener('click', async () => {
    const userVote = await fetchUserVoteCount(bookmark._id);
    if (userVote.likeCount === 0) {
      const updatedCount = await addVote(bookmark._id, 'like');
      likesCount.textContent = updatedCount.likeCount;
      dislikesCount.textContent = updatedCount.dislikeCount;

      likeIcon.classList.replace('fa-regular', 'fa-solid');
      dislikeIcon.classList.replace('fa-solid', 'fa-regular');
    }
  });

  dislikeButton.addEventListener('click', async () => {
    const userVote = await fetchUserVoteCount(bookmark._id);
    if (userVote.dislikeCount === 0) {
      const updatedCount = await addVote(bookmark._id, 'dislike');
      dislikesCount.textContent = updatedCount.dislikeCount;
      likesCount.textContent = updatedCount.likeCount;

      dislikeIcon.classList.replace('fa-regular', 'fa-solid');
      likeIcon.classList.replace('fa-solid', 'fa-regular');
    }
  });
}

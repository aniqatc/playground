import bookmarkContext from './context';
const { widget } = bookmarkContext;
import { addVote, fetchUserVoteCount } from './data';

export default async function initializeVoteButtons(bookmark) {
  const el = widget.querySelector(`#id-${bookmark._id}`);
  const likeButton = el.querySelector('.sidebar--actions--likes-btn');
  const dislikeButton = el.querySelector('.sidebar--actions--dislikes-btn');
  const likesCount = el.querySelector('.sidebar--actions--likes-count');
  const dislikesCount = el.querySelector('.sidebar--actions--dislikes-count');
  const score = el.querySelector('.bookmark-score');

  const render = ({ likeCount, dislikeCount }, vote) => {
    likesCount.textContent = likeCount;
    dislikesCount.textContent = dislikeCount;
    score.textContent = likeCount - dislikeCount;
    score.title = `${likeCount} likes · ${dislikeCount} dislikes`;
    likeButton.setAttribute('aria-pressed', String(vote === 'like'));
    dislikeButton.setAttribute('aria-pressed', String(vote === 'dislike'));
  };

  const pop = (button) => {
    button.classList.remove('pop');
    void button.offsetWidth;
    button.classList.add('pop');
  };

  likeButton.addEventListener('click', async () => {
    pop(likeButton);
    const userVote = await fetchUserVoteCount(bookmark._id);
    if (userVote.likeCount === 0) {
      render(await addVote(bookmark._id, 'like'), 'like');
    }
  });

  dislikeButton.addEventListener('click', async () => {
    pop(dislikeButton);
    const userVote = await fetchUserVoteCount(bookmark._id);
    if (userVote.dislikeCount === 0) {
      render(await addVote(bookmark._id, 'dislike'), 'dislike');
    }
  });
}

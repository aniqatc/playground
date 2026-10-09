const MAX_LIKES = 5;

function getUserLikes() {
  return JSON.parse(localStorage.getItem('userLikes')) || {};
}

function canUserLike(id) {
  const userLikes = getUserLikes();
  return (userLikes[id] || 0) < MAX_LIKES;
}

function updateUserLikes(id) {
  const userLikes = getUserLikes();
  userLikes[id] = (userLikes[id] || 0) + 1;
  localStorage.setItem('userLikes', JSON.stringify(userLikes));
}

/**
 * Reflects the visitor's own likes on a like button.
 * - `liked`  fills the heart once they've liked the widget at least once
 * - `maxed`  once they've used all 5 likes (the next click shakes instead of popping)
 * - `pop`    replays the pop / "+1" animation on click
 */
function updateLikeButtonState(btn, id, { animate = false, blocked = false } = {}) {
  const count = getUserLikes()[id] || 0;
  const plus = btn.querySelector('.plus');

  btn.classList.toggle('liked', count > 0);
  btn.classList.toggle('maxed', count >= MAX_LIKES);
  btn.setAttribute('aria-pressed', String(count > 0));
  if (plus) plus.textContent = blocked ? `max ${MAX_LIKES}` : '+1';

  if (animate) {
    btn.classList.remove('pop');
    void btn.offsetWidth; // restart the animation if it's already running
    btn.classList.add('pop');
    clearTimeout(btn.popTimer);
    btn.popTimer = setTimeout(() => btn.classList.remove('pop'), 850);
  }
}

export { canUserLike, updateLikeButtonState, updateUserLikes };

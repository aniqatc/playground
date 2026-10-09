import { canUserLike, updateLikeButtonState, updateUserLikes } from './likeHelpers';

/*
 * Like buttons and counts are found by data attributes instead of by their
 * position in the DOM (the old version used previousElementSibling/
 * nextElementSibling, which broke as soon as the markup changed).
 *
 *   <button data-like-btn="02">            the like button inside a card
 *   <span data-like-count="02">            any element that shows the count
 *                                          (the card footer and the hero index)
 */
function initializeLikeHandler() {
  const likeButtons = document.querySelectorAll('[data-like-btn]');

  likeButtons.forEach((btn) => {
    const widgetId = btn.dataset.likeBtn;
    handleLikes(widgetId, 'GET');
    updateLikeButtonState(btn, widgetId);

    btn.addEventListener('click', () => {
      const allowed = canUserLike(widgetId);
      if (allowed) {
        handleLikes(widgetId, 'POST');
        updateUserLikes(widgetId);
      }
      updateLikeButtonState(btn, widgetId, { animate: true, blocked: !allowed });
    });
  });
}

function renderCount(widgetId, count) {
  document.querySelectorAll(`[data-like-count="${widgetId}"]`).forEach((el) => {
    el.textContent = count;
  });
}

async function handleLikes(id, type) {
  const cacheKey = `likes-${id}`;
  const cachedLikes = sessionStorage.getItem(cacheKey);
  let data;

  try {
    if (type === 'GET' && cachedLikes) {
      data = JSON.parse(cachedLikes);
    } else {
      const serverURL = process.env.SERVER;
      const likesURL = `${serverURL}/likes/${id}`;
      const response = await fetch(likesURL, { method: type });
      data = await response.json();

      sessionStorage.setItem(cacheKey, JSON.stringify(data));
    }

    renderCount(id, data.likeCount);
  } catch (error) {
    console.error(`Error with handling likes: ${error}`);
  }
}

export { initializeLikeHandler };

import {
  canUserLike,
  updateLikeButtonState,
  updateUserLikes,
} from "./likeHelpers";

function initializeLikeHandler() {
  const likeValues = document.querySelectorAll(".js-like-value");
  const likeButtons = document.querySelectorAll(".js-like-btn");

  likeValues.forEach((el) => {
    const btnIcon = el.previousElementSibling.lastElementChild;
    const widgetId = el.id.split("-")[1];
    handleLikes(el, widgetId, "GET");
    updateLikeButtonState(btnIcon, widgetId);
  });

  likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const btnIcon = btn.firstElementChild;
      const likesEl = btn.nextElementSibling;
      const widgetId = likesEl.id.split("-")[1];

      if (canUserLike(widgetId)) {
        handleLikes(likesEl, widgetId, "POST");
        updateLikeButtonState(btnIcon, widgetId);
        updateUserLikes(widgetId);
      }
    });
  });
}

async function handleLikes(el, id, type) {
  const cacheKey = `likes-${id}`;
  const cachedLikes = sessionStorage.getItem(cacheKey);
  let data;

  try {
    if (type === "GET" && cachedLikes) {
      data = JSON.parse(cachedLikes);
    } else {
      const serverURL = process.env.SERVER;
      const likesURL = `${serverURL}/widget/likes/${id}`;
      const response = await fetch(likesURL, { method: type });
      data = await response.json();

      sessionStorage.setItem(cacheKey, JSON.stringify(data));
    }

    el.textContent = data.likeCount;
  } catch (error) {
    console.error(`Error with handling likes: ${error}`);
  }
}

export { initializeLikeHandler };
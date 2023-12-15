import { getUserLikes, canUserLike, updateUserLikes } from "./likeHelpers";

function initializeLikeHandler() {
  const likeValues = document.querySelectorAll(".js-like-value");
  const likeButtons = document.querySelectorAll(".js-like-btn");

  likeValues.forEach((el) => {
    const widgetId = el.id.split("-")[1];
    handleLikes(el, widgetId, "GET");

    const userLikes = getUserLikes();
    if (userLikes[widgetId] > 0) {
      el.previousElementSibling.classList.add("liked-color");
    }
  });

  likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const likesEl = btn.nextElementSibling;
      const widgetId = likesEl.id.split("-")[1];
      const btnIcon = btn.firstElementChild;

      if (canUserLike(widgetId)) {
        btnIcon.classList.add("liked-color");
        handleLikes(likesEl, widgetId, "POST");
        updateUserLikes(widgetId);
      } else {
        btnIcon.classList.remove("group-active:scale-125");
        return;
      }
    });
  });
}

async function handleLikes(el, id, type) {
  const cacheKey = `likes-${id}`;
  const storedCache = sessionStorage.getItem(cacheKey);
  let data;

  try {
    if (type === "GET" && storedCache) {
      data = JSON.parse(storedCache);
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

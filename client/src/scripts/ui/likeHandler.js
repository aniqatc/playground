function initializeLikeHandler() {
  const likeValues = document.querySelectorAll(".js-like-value");
  const likeButtons = document.querySelectorAll(".js-like-btn");

  likeValues.forEach((el) => {
    const id = el.id.split("-")[1];
    handleLikes(el, id, "GET");
  });

  likeButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const likesEl = event.target.parentElement.nextElementSibling;
      const likesId = likesEl.id.split("-")[1];

      handleLikes(likesEl, likesId, "POST");
    });
  });
}

async function handleLikes(el, id, type) {
  const cacheKey = `likes-${id}`;
  let data;

  try {
    if (type === "GET" && sessionStorage.getItem(cacheKey)) {
      data = JSON.parse(sessionStorage.getItem(cacheKey));
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

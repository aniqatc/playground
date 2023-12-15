import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";

applySavedTheme();
loadWidgets();

const likeButtons = document.querySelectorAll(".js-like-btn");

likeButtons.forEach((btn) => {
  const likeEl = btn.nextElementSibling;
  const likeId = likeEl.id.split("-")[1];

  handleLikes(likeEl, likeId, "GET");

  btn.addEventListener("click", async (event) => {
    const likesEl = event.target.parentElement.nextElementSibling;
    const likesId = likesEl.id.split("-")[1];

    handleLikes(likesEl, likesId, "POST");
  });
});

async function handleLikes(el, id, req) {
  const likesURL = `http://data.playground.aniqa.dev/widget/likes/${id}`;
  const response = await fetch(likesURL, { method: req });
  const data = await response.json();

  el.textContent = data.likeCount;
}

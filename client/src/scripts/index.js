import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";

applySavedTheme();
loadWidgets();

const likeButtons = document.querySelectorAll(".js-like-btn");
const likeValues = document.querySelectorAll(".js-like-value");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const likesEl = event.target.parentElement.nextElementSibling;
    const likesId = likesEl.id.split("-")[1];

    handleLikes(likesEl, likesId, "POST");
  });
});

likeValues.forEach((el) => {
  const id = el.id.split("-")[1];
  handleLikes(el, id, "GET");
});

async function handleLikes(el, id, type) {
  const likesURL = `https://data.playground.aniqa.dev/widget/likes/${id}`;
  const response = await fetch(likesURL, { method: type });
  const data = await response.json();

  el.textContent = data.likeCount;
}

import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";

applySavedTheme();
loadWidgets();

const likeButtons = document.querySelectorAll(".js-like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const likesEl = event.target.parentElement.nextElementSibling;
    const likesId = likesEl.id.split("-")[1];

    addLikes(likesEl, likesId);
  });
});

async function addLikes(el, id) {
  const likesURL = `http://data.playground.aniqa.dev/widget/likes/${id}`;

  const response = await fetch(likesURL, { method: "POST" });
  const data = await response.json();

  el.textContent = data.likes;
}

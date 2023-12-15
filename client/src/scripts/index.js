import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";

applySavedTheme();
loadWidgets();

const likeButtons = document.querySelectorAll(".js-like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", handleLikes);
  handleLikes({ target: btn, type: "DOMContentLoaded" });
});

async function handleLikes(event) {
  const likesEl = event.target.parentElement.nextElementSibling;
  const likesId = likesEl.id.split("-")[1];
  const methodType = event.type === "click" ? "POST" : "GET";
  const likesURL = `https://data.playground.aniqa.dev/widget/likes/${likesId}`;

  const response = await fetch(likesURL, { method: methodType });
  const data = await response.json();

  likesEl.textContent = data.likeCount;
}

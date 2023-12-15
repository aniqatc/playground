import "../styles/main.css";
import { loadWidgets } from "./load";
import { applySavedTheme } from "./ui/themeHandler";

applySavedTheme();
loadWidgets();

const likeButtons = document.querySelectorAll(".js-like-btn");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    const likesEl = event.target.parentElement.nextElementSibling;
    const likesId = likesEl.id.split("-")[1];

    const likesURL = `http://localhost:3000/widget/likes/${likesId}`;
    const response = await fetch(likesURL, { method: "POST" });
    const data = await response.json();
    console.log(data);
    likesEl.textContent = data.likes;
  });
});

async function addLikes(el, id) {
  const likesURL = `http://localhost:3000/widget/likes/${id}`;
  const response = await fetch(likesURL, { method: "POST" });
  const data = await response.json();
  console.log(data);
  el.textContent = data.likes;
}

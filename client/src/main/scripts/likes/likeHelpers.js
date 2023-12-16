function getUserLikes() {
  return JSON.parse(localStorage.getItem("userLikes")) || {};
}

function canUserLike(id) {
  const userLikes = getUserLikes();
  return userLikes[id] >= 5 ? false : true;
}

function updateUserLikes(id) {
  const userLikes = getUserLikes();
  userLikes[id] = (userLikes[id] || 0) + 1;
  localStorage.setItem("userLikes", JSON.stringify(userLikes));
}

function updateLikeButtonState(btnIcon, id) {
  const userLikes = getUserLikes();
  if (userLikes[id] > 0) {
    btnIcon.classList.add("liked-color");
  }
  if (userLikes[id] >= 5) {
    btnIcon.classList.remove("group-active:scale-125");
  }
}

export { canUserLike, updateLikeButtonState, updateUserLikes };

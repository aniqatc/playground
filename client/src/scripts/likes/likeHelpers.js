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

export { getUserLikes, canUserLike, updateUserLikes };

import { v4 as uuidv4 } from "uuid";

async function createNewUser() {
  if (!localStorage.getItem("userId")) {
    const userId = uuidv4();
    localStorage.setItem("userId", userId);

    const serverURL = process.env.SERVER;
    const response = await fetch(`${serverURL}/users/${userId}`);
    const userData = await response.json();
    return userData;
  }
}

async function fetchUserData() {
  const userId = localStorage.getItem("userId");

  if (userId) {
    const serverURL = process.env.SERVER;
    const response = await fetch(`${serverURL}/users/${userId}`);
    const userData = await response.json();
    return userData;
  }
}

export { createNewUser, fetchUserData };

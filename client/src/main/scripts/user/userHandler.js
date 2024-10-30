import {v4 as uuidv4} from "uuid";

async function createNewUser() {
  if (!localStorage.getItem("userId")) {
    const userId = uuidv4();
    localStorage.setItem("userId", userId);

    const serverURL = process.env.SERVER;
    const response = await fetch(`${serverURL}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    return await response.json();
  }
}

async function fetchUserData() {
  const userId = localStorage.getItem("userId");

  if (userId) {
    const serverURL = process.env.SERVER;
    const response = await fetch(`${serverURL}/users/${userId}`);
    return await response.json();
  }
}

export { createNewUser, fetchUserData };

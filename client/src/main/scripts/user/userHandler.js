import { v4 as uuidv4 } from 'uuid';

async function createAndFetchUser() {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem('userId', userId);
  }

  const serverURL = process.env.SERVER;

  try {
    await fetch(`${serverURL}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
  } catch (error) {
    // skip
  }

  return userId;
}

export { createAndFetchUser };

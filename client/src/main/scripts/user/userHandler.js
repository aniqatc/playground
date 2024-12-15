import { v4 as uuidv4 } from 'uuid';

async function createNewUser() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem('userId', userId);
    }

    const serverURL = process.env.SERVER;
    const response = await fetch(`${serverURL}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    await response.json();
    return userId;
}

export { createNewUser };

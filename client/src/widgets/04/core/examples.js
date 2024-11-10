import toDoActions from "./toDoActions";

async function displayDefaultTodos() {
  let userId = localStorage.getItem("userId");
  if (!userId) return;

  const response = await fetch(`${process.env.SERVER}/widget/todos/${userId}`);
  const todos = await response.json();

  if (todos.length === 0) {
    await fetch(`${process.env.SERVER}/widget/todos/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    await new Promise((resolve) => setTimeout(resolve, 500));
    const updatedResponse = await fetch(`${process.env.SERVER}/widget/todos/${userId}`);
    const updatedTodos = await updatedResponse.json();

    updatedTodos.forEach((todo) => {
      toDoActions.addToDOM(todo);
    });
  } else {
    todos.forEach((todo) => {
      toDoActions.addToDOM(todo);
    });
  }
}

export { displayDefaultTodos };

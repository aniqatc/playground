import toDoActions from "./toDoActions";
import { createNewUser } from "../../../main/scripts/user/userHandler";

async function displayDefaultTodos() {
  let userId = await createNewUser();

  const response = await fetch(`${process.env.SERVER}/widget/todos/${userId}`);
  const todos = await response.json();

  if (todos.length === 0) {
    const exampleTodos = [
      {
        task: "Play around with the new to-do widget in the playground",
        dueDate: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(),
        priority: "high",
        isArchived: false,
        isCompleted: false
      },
      {
        task: "View the GitHub repository for this website and provide feedback",
        dueDate: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString(),
        priority: "medium",
        isArchived: false,
        isCompleted: false
      },
      {
        task: "Create a digital footprint widget with a map from MapBox",
        dueDate: new Date().toISOString(),
        priority: "low",
        isArchived: true,
        isCompleted: true
      },
    ];

    for (const todo of exampleTodos) {
      await toDoActions.addToDB(todo.task, todo.dueDate, todo.priority, todo.isArchived, todo.isCompleted);
    }
  } else {
    await toDoActions.fetchAndDisplayToDos();
  }
}

export { displayDefaultTodos };

import todoContext from "./context";

export function initializeInput() {
  const {
    toDoSelectedDate,
    textarea,
    selectOptionButton,
    toDoAddButton,
    toDoList,
    inputContainer,
  } = todoContext;

  toDoAddButton.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });

  toDoAddButton.addEventListener("click", () => {
    const date = toDoSelectedDate ? toDoSelectedDate : Date.now();
    const content = textarea.value;
    const tag = selectOptionButton.getAttribute("data-value");
    if (content && tag) {
      alert("Hello!");
      console.log(content, tag, date);
    } else {
      inputContainer.classList.add("error");
    }
  });

  textarea.addEventListener("input", () => {
    inputContainer.classList.remove("error");
  });
}

/* 
class toDoActions
- add to do - to DOM and to DB
- edit to do - to DOM and to DB
- delete to do - to DOM and to DB
- adjust status (incomplete task, archived task, completed task)
*/

// function to create the todo
// function to check if limit is reached
// function to add to dom
// event listener to trigger the todo creation
// function to trigger creation of eventlisteners on the individual todo item

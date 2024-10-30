import todoContext from "./context";

function initializeFilterTags() {
    const { filterContainer, toDoList } = todoContext;
    const filterTags = filterContainer.querySelectorAll("button");

    filterContainer.addEventListener("click", (event) => {
        const clickedFilter = event.target;
        if (clickedFilter.classList.contains("active")) {
            return;
        }
        filterTags.forEach(tag => tag.classList.remove("active"));
        clickedFilter.classList.add("active");

        const filterType = clickedFilter.textContent.trim().toLowerCase();
        const todoItems = toDoList.querySelectorAll(".todo-item");

        filterTodoItems(todoItems, filterType);
    });
}

function filterTodoItems(todoItems, filterType){
    todoItems.forEach(item => {
        const isArchived = item.classList.contains("archived");
        const isCompleted = item.querySelector("input[type='checkbox']").checked;
        const priorityClass = Array.from(item.querySelector(".fa-hashtag")?.classList || [])
            .find(className => className.endsWith("-color"))
            ?.replace("-color", "");

        let shouldDisplay = false;

        switch (filterType) {
            case "archived":
                shouldDisplay = isArchived;
                break;
            case "completed":
                shouldDisplay = isCompleted;
                break;
            case "low":
            case "medium":
            case "high":
                shouldDisplay = priorityClass === filterType;
                break;
            case "untagged":
                shouldDisplay = !priorityClass;
                break;
            case "all":
                shouldDisplay = true;
                break;
            default:
                shouldDisplay = true;
        }
        item.style.display = shouldDisplay ? "flex" : "none";
    });
}

export { initializeFilterTags };

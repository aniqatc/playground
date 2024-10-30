import todoContext from "./context";

function initializeFilterTags() {
    const { filterContainer, toDoList } = todoContext;
    const filterTags = filterContainer.querySelectorAll("button");

    filterContainer.addEventListener("click", (event) => {
        filterTags.forEach(tag => tag.classList.remove("active"));
        event.target.classList.add("active");

        const filterType = event.target.textContent.trim().toLowerCase();
        const todoItems = toDoList.querySelectorAll(".todo-item");

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
    });
}

export { initializeFilterTags };

#### Task Tracker

[![HTML Badge](https://img.shields.io/badge/HTML-F4BA52)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-F4BA52)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-F4BA52)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-F4BA52)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-F4BA52)](https://github.com/aniqatc/playground)
[![Flatpickr Badge](https://img.shields.io/badge/Flatpickr-F4BA52)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-F4BA52)](https://github.com/aniqatc/playground)

**Relevant file(s)**: [/client/src/widgets/04/\*](../../client/src/widgets/04/), [/server/widgets/04/\*](../../server/widgets/04/)

A fully interactive To-Do List widget allowing users to create, edit, archive, and delete tasks. Tasks are categorized by priority levels and can be filtered based on completion, priority, or archived status.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-04_v1.png"></a>

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Node.js & Express.js: Backend technologies for managing and serving task data
- Flatpickr: Calendar integration for selecting due dates

## Storage

- MongoDB: Stores user tasks, task statuses (e.g. completed, archived), due dates, and priority levels

## Features

- **Task Management**: Users can add, edit, delay, and delete individual tasks.
- **Priority Tagging**: Assign tasks with different priority levels (low, medium, high, or untagged).
- **Task Filtering**: Filter tasks by completion status, priority, or archive status to quickly view relevant tasks.
- **Persistent Storage**: Each user has a unique ID stored in their local storage, enabling MongoDB to retain their data across sessions.
- **Due Date Selection**: Flatpickr calendar integration allows users to set due dates intuitively.

## Limitations

- No data encryption methods are used; only basic CRUD operations are supported currently

## Widget Architecture

**Frontend**: [/client/src/widgets/04/\*](../../client/src/widgets/04/)

1. **Task Management**: Users can interact with tasks (add, edit, delete, delay and archive)
2. **Filter & Display**: Uses filter tags to display tasks based on completion, priority or archived status
3. **Calendar Integration**: Includes Flatpickr for selecting and displaying task due dates with custom styling

**Frontend Components**

- [/client/../widgets/04/style.scss](../../client/src/widgets/04/style.scss): Handles the styling for the widget, including the subtle animation that occurs when page is loaded
- [/client/../widgets/04/content.js](../../client/src/widgets/04/content.js): Contains the HTML structure for the widget (including placeholder values if there is an error getting the user's digital footprint)
- [/client/../widgets/04/script.js](../../client/src/widgets/04/script.js): Initializes and loads the widget components, handles default task display and manages user data retrieval
- [/client/../widgets/04/core/*](../../client/src/widgets/04/core): 
  - **Calendar** ([../calendar.js](../../client/src/widgets/04/core/calendar.js) & [../calendar.scss](../../client/src/widgets/04/core/calendar.scss)): Handles the initialization and styling of the Flatpickr calendar instance
  - **Context** ([../context.js](../../client/src/widgets/04/core/context.js)): Initializes and manages key DOM elements
  - **Examples** ([../examples.js](../../client/src/widgets/04/core/examples.js)): Asynchronous function to create sample to-do tasks for new users or users without any to-dos listed in their database already
  - **Filtering** ([../filter.js](../../client/src/widgets/04/core/filter.js)): Handles filtering the to-do tasks based on the filter option selected
  - **User Input** ([../input.js](../../client/src/widgets/04/core/input.js)): Handles user input by adding a new to-do task to the database or showing error if an incorrect input is provided
  - **Textarea Initialization** ([../textarea.js](../../client/src/widgets/04/core/textarea.js)): Handles the initialization of the textarea, the priority dropdown, and applying focused styling to elements 
  - **To Do Actions** ([../toDoActions.js](../../client/src/widgets/04/core/toDoActions.js)): Class that handles the retrieval and displaying of any existing to-dos, adding individual items to the database and consequentially, the DOM, initializes individual to-do task actions (archive, delay, edit and delete buttons), toggles completion status, along with a few helper functions

**Backend**

1. Task Model ([/server/widgets/04/toDoModel.js](/server/widgets/04/toDoModel.js)): MongoDB schema defining task attributes (task description, due date, priority and archived/completion status)
2. Task Router ([/server/widgets/04/toDoRouter.js](/server/widgets/04/toDoRouter.js)): Provides API endpoints for creating, updating, retrieving, and deleting tasks

**Backend Components**

- [/server.js](/server.js): Initializes the Express.js server & handles API routing
- [/server/widgets/04/toDoModel.js](/server/widgets/04/toDoModel.js): Defines Mongoose schema and data structure for storing tasks
- [/server/widgets/04/toDoRouter.js](/server/widgets/04/toDoRouter.js): API endpoint routes for routing CRUD operations for tasks

## How to Use

- **Create Tasks**: Add a new task by entering a description, setting a due date, and assigning a priority.
- **Manage Tasks**: Edit tasks inline, mark them as completed, or archive them if they’re no longer active.
- **Filter Tasks**: Use the filter tags to view tasks based on their completion status, priority, or archived state.

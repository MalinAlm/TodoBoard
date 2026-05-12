# Project Idea

A simple task board where the user can:

- create tasks
- mark tasks as completed
- delete tasks

## Must Have

- create columns (Todo, Done)
- create tasks
- delete tasks
- save in localStorage

## Should Have

- create multiple boards
- improve styling
- move tasks between statuses (drag and drop)
- responsive design

## Could Have

- edit tasks (e.g. change color, title, description, etc.)
- collaborative functionality (e.g. current “Doing” status and adding “assigned to”)
- deadlines/dates

---

# Technologies

- React
- TypeScript
- Vite
- HTML
- CSS
- localStorage

---

# Product Backlog

## User story 1

As a user, I want to be able to open a webapplication that shows me a Todo board.  

### Acceptance criteria:
- User can open a webapp
- A todo board is displayed when application loads
- The board contains two columns
- The application works on desktop
- There should be error handling and user feedback


## User Story 2

As a user, I want to be able to create a task so that I can add things I need to do.

### Acceptance criteria:
- User can create a new task by clicking a button
- User can enter a task title
- The new task appears in the Todo column on the board
- Empty tasks cannot be created
- There should be error handling and user feedback


## User Story 3

As a user, I want to be able to mark a task as Done so that I can see what has been completed.

### Acceptance criteria:
- User can move a task from the Todo column to the Done column by checking a box
- There should be error handling and user feedback


## User Story 4

As a user, I want to be able to delete a task so that the board stays clean.

### Acceptance criteria:
- User can delete a task using a delete button
- Deleted tasks disappear from the board immediately
- There should be error handling and user feedback


## User Story 5

As a user, I want my tasks to be saved so that I do not lose them when I refresh or reopen the application.

### Acceptance criteria:
- Tasks are saved in localStorage when save btn clicked
- Tasks remain visible after page refreshes
- Tasks are loaded when the application starts
- The task remains marked as Done after refresh
- Deleted tasks are removed from localStorage
- There should be error handling and user feedback

## User Story 6

As a user, I want to be able to move tasks between different statuses using drag and drop so that I can easily track the progress of my work.

### Acceptance criteria:
- User can drag and drop tasks between columns
- Task status in locaStorage updates automatically after movement
- Updated task positions remain after refresh
- There should be error handling and user feedback


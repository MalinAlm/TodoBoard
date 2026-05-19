import "./Board.css";
import TaskCard from "../TaskCard/TaskCard";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import { useState } from "react";

const Board = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [taskTitle, setTaskTitle] = useState(false);

  return (
    <main>
      <h1>Test Board</h1>
      <div className="task-column-container">
        <div className="task-column todo-column">
          <h2>Todo</h2>
          <button
            id="board-add-task-btn"
            className="board-add-task-btn"
            onClick={() => setShowTaskForm(true)}
          >
            + Add task
          </button>
          {showTaskForm && <CreateTaskForm />}
          <div>
            <ul>
              <TaskCard />
            </ul>
          </div>
        </div>
        <div className="task-column done-column">
          <h2>Done</h2>
          <div>
            <ul>
              <li>Done task</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Board;

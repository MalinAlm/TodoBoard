import "./Board.css";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import { useState } from "react";

const Board = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (taskTitle: string) => {
    if (taskTitle.trim() === "") {
      alert("Task title cannot be empty");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskTitle]);
    setShowTaskForm(false);
  }

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
          {showTaskForm && <CreateTaskForm onCreateTask={addTask} />}
          <div>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
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

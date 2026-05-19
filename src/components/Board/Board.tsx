import "./Board.css";
import TaskCard from "../TaskCard/TaskCard";

const Board = () => {
  return (
    <main>
      <h1>Test Board</h1>
      <div className="task-column-container">
        <div className="task-column todo-column">
          <h2>Todo</h2>
          <button className="board-add-task-btn">+ Add task</button>
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

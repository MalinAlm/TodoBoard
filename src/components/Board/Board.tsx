import "./Board.css";

const Board = () => {
  return (
    <main>
      <h1>Test Board</h1>
      <div className="task-column-container">
        <div className="task-column todo-column">
          <h2>Todo</h2>
          <div>
            <ul>
              <li>Task 1</li>
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

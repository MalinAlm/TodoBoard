import "./CreateTaskForm.css";
import { useState } from "react";

type CreateTaskFormProps = {
  onCreateTask: (taskTitle: string) => void;
};

const CreateTaskForm = ({ onCreateTask }: CreateTaskFormProps) => {

  const [taskTitle, setTaskTitle] = useState("");

  const handleCreateTask = () => {
    onCreateTask(taskTitle);
    setTaskTitle("");
  }

  return (
    <div className="create-task-form-container">
      <div className="create-task-form">
        <input
          placeholder="Enter task title"
          id="create-task-form-input"
          className="create-task-form-input"
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button id="create-task-form-btn" onClick={handleCreateTask}>Create task</button>
      </div>
    </div>
  );
};

export default CreateTaskForm;

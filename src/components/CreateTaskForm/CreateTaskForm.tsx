import "./CreateTaskForm.css";

const CreateTaskForm = () => {
    return (
        <div className="create-task-form-container">
            <div className="create-task-form">
                <input id="create-task-form-input" className="create-task-form-input" type="text" />
                <button id="create-task-form-btn">Create task</button>
            </div>
        </div>
    );
};

export default CreateTaskForm;
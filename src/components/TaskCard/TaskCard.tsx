import "./TaskCard.css";

type TaskCardProps = {
  title: string;
};

const TaskCard = ({ title }: TaskCardProps) => {
  return (
    <li draggable="true" className="task-card">
      <h3>{title}</h3>
    </li>
  );
};

export default TaskCard;

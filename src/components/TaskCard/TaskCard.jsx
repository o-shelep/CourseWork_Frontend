import "./TaskCard.css";

const TaskCard = () => {
  return (
    <div className="task-card">
      <div className="task-icon">OOP</div>

      <div className="task-content">
        <p className="task-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>

      <div className="task-actions">
        <button className="submit-task-btn">Здати роботу</button>
        <button className="details-task-btn">Деталі</button>
      </div>
    </div>
  );
};

export default TaskCard;

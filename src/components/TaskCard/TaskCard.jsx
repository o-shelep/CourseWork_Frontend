import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title, description, points, deadline, createdByName }) => {
  return (
    <div className="task-card">
      <div className="task-icon">{title}</div>

      <div className="task-content">
        <p className="task-text">{description}</p>
        <p className="task-meta">
          <strong>Балів:</strong> {points} | <strong>Дедлайн:</strong>{" "}
          {new Date(deadline).toLocaleString()} | <strong>Викладач:</strong>{" "}
          {createdByName}
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

import React from "react";
import { useNavigate } from "react-router-dom";
import "./TaskCard.css";

const TaskCard = ({ id, title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="task-card">
      <div className="task-icon">{title}</div>

      <div className="task-content">
        <p className="task-text">{description}</p>
      </div>

      <div className="task-actions">
        <button
          className="submit-task-btn"
          onClick={() => navigate(`/tasks/${id}`)}
        >
          Здати роботу
        </button>
        <button
          className="details-task-btn"
          onClick={() => navigate(`/tasks/${id}`)}
        >
          Деталі
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

import React from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import "./TaskDetail.css";

const TaskDetail = () => {
  const { taskId } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((t) => String(t.id) === taskId);

  if (!task) return <p>Завдання не знайдено.</p>;

  return (
    <div className="task-detail-container">
      <div className="task-header">
        <div className="subject">
          <div className="subject-icon">{task.title}</div>
          <h2 className="subject-title">{task.title}</h2>
        </div>
        <div className="teacher">
          <span>Викладач</span>
          <strong>{task.createdByName}</strong>
        </div>
      </div>

      <div className="task-description">
        <h3>Опис Місії</h3>
        <p>{task.description}</p>
      </div>

      <div className="task-info">
        <div>
          <span className="label">
            Максимальна кількість балів, яку може отримати студент
          </span>
          <p className="info-value">{task.points}</p>
        </div>
        <div>
          <span className="label">Можливі Досягнення</span>
          <button className="achievement">Перша Місія</button>
        </div>
      </div>

      <div className="submission-area">
        <textarea placeholder="Enter your answer..."></textarea>
      </div>

      <div className="task-footer">
        <div className="deadline">
          <span>Здати до</span>
          <p>{task.deadline || "N/A"}</p>
        </div>
        <button className="submit-btn">Здати роботу</button>
      </div>
    </div>
  );
};

export default TaskDetail;

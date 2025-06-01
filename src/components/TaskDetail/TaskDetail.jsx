import React from "react";
import "./TaskDetail.css";
import { useTaskDetail } from "../../hooks/useTaskDetail";
import { formatSubject } from "../../utils/textUtil";

const TaskDetail = () => {
  const { task, content, setContent, message, handleSubmit } = useTaskDetail();

  if (!task) return <p>Завдання не знайдено.</p>;

  return (
    <div className="task-detail-container">
      <div className="task-header">
        <div className="subject">
          <div className="subject-icon">{formatSubject(task.title)}</div>
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
        <textarea
          placeholder="Введіть посилання на відповідь або текст..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      {message && <p className="submission-message">{message}</p>}

      <div className="task-footer">
        <div className="deadline">
          <span>Здати до</span>
          <p>{task.deadline || "N/A"}</p>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Здати роботу
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;

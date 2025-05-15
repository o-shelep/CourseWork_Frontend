import React from "react";
import "./TaskDetail.css";

const TaskDetail = () => {
  return (
    <div className="task-detail-container">
      <div className="task-header">
        <div className="subject">
          <div className="subject-icon">ООП</div>
          <h2 className="subject-title">Об'єктно орієнтоване програмування</h2>
        </div>
        <div className="teacher">
          <span>Викладач</span>
          <strong>Андрій Легеза</strong>
        </div>
      </div>

      <div className="task-description">
        <h3>Опис Місії</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="task-info">
        <div>
          <span className="label">
            Максимальна кількість балів, яку може отримати студент
          </span>
          <p className="info-value">20.00</p>
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
          <p>23.04.2024, 12.00 a.m.</p>
        </div>
        <button className="submit-btn">Здати роботу</button>
      </div>
    </div>
  );
};

export default TaskDetail;

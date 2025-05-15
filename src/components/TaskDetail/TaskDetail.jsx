import React from "react";
import "./TaskDetail.css";

const TaskDetail = () => {
  return (
    <div className="task-detail-container">
      <div className="task-header">
        <div className="subject">
          <div className="subject-icon">OOP</div>
          <h2 className="subject-title">Object Oriented Programming</h2>
        </div>
        <div className="teacher">
          <span>Teacher</span>
          <strong>Andriy Legeza</strong>
        </div>
      </div>

      <div className="task-description">
        <h3>Task Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="task-info">
        <div>
          <span className="label">Type Of Submission</span>
          <p className="info-value">Text</p>
        </div>
        <div>
          <span className="label">Maximum Number Of Points You'll Get</span>
          <p className="info-value">20.00</p>
        </div>
        <div>
          <span className="label">Possible Achievements</span>
          <button className="achievement">First Submission</button>
        </div>
      </div>

      <div className="submission-area">
        <textarea placeholder="Enter your answer..."></textarea>
      </div>

      <div className="task-footer">
        <div className="deadline">
          <span>Deadline</span>
          <p>23.04.2024, 12.00 a.m.</p>
        </div>
        <button className="submit-btn">Здати роботу</button>
      </div>
    </div>
  );
};

export default TaskDetail;

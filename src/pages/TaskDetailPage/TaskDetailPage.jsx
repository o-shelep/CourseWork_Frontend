import React from "react";
import TaskDetail from "../../components/TaskDetail/TaskDetail";
import Sidebar from "../../components/Sidebar/Sidebar";
import BannerImg from "../../assets/Banner.svg";
import "./TaskDetailPage.css";
function TaskDetailPage() {
  return (
    <div className="task-detail-page-container">
      <Sidebar />
      <div className="task-detail-page-container-content">
        <img src={BannerImg} alt="St. Mission Banner" />
        <TaskDetail />
      </div>
    </div>
  );
}

export default TaskDetailPage;

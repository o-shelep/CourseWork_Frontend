import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskCard from "../../components/TaskCard/TaskCard";
import UserStats from "../../components/UserStats/UserStats";
import BannerImg from "../../assets/Banner.svg";
import "./DashboardPage.css";
const mockTasks = [
  { id: 1, title: "Task 1", description: "Do the first task" },
  { id: 2, title: "Task 2", description: "Another task to handle" },
  { id: 3, title: "Task 3", description: "Complete this one too" },
];
function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="dashboard-container-content">
        <img src={BannerImg} alt="St. Mission Banner" />
        {mockTasks.map((task) => (
          <div key={task.id} className="task-card-container">
            <TaskCard title={task.title} description={task.description} />
          </div>
        ))}
      </div>

      <div className="sidebar-container">
        <UserStats />
      </div>
    </div>
  );
}

export default DashboardPage;

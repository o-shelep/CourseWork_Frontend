import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskCard from "../../components/TaskCard/TaskCard";
import UserStats from "../../components/UserStats/UserStats";
import BannerImg from "../../assets/Banner.svg";
import { useTasks } from "../../hooks/useTasks";
import { formatSubject } from "../../utils/textUtil";
import { truncateDescription } from "../../utils/textUtil";
import "./DashboardPage.css";

function DashboardPage() {
  const { tasks, error } = useTasks();

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="dashboard-container-content">
        <img src={BannerImg} alt="St. Mission Banner" />
        {error && <p className="error-message">{error}</p>}
        {tasks.map((task) => (
          <div key={task.id} className="task-card-container">
            <TaskCard
              title={formatSubject(task.title)}
              description={truncateDescription(task.description)}
            />
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

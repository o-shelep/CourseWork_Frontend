import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskCard from "../../components/TaskCard/TaskCard";
import BannerImg from "../../assets/Banner.svg";
import { useTasks } from "../../hooks/useTasks";
import { formatSubject } from "../../utils/textUtil";
import { truncateDescription } from "../../utils/textUtil";
import "./MyAssignmentsPage.css";

function MyAssignmentsPage() {
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
    </div>
  );
}

export default MyAssignmentsPage;

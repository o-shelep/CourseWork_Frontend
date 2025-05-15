import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskCard from "../../components/TaskCard/TaskCard";
import UserStats from "../../components/UserStats/UserStats";
import BannerImg from "../../assets/Banner.svg";
const mockTasks = [
  { id: 1, title: "Task 1", description: "Do the first task" },
  { id: 2, title: "Task 2", description: "Another task to handle" },
  { id: 3, title: "Task 3", description: "Complete this one too" },
];
function DashboardPage() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <div style={{ flexShrink: 0 }}>
        <Sidebar />
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px" }}>
        <img
          src={BannerImg}
          alt="Description"
          style={{ width: "100%", objectFit: "cover", marginBottom: "16px" }}
        />
        {mockTasks.map((task) => (
          <div key={task.id} style={{ marginBottom: "16px", width: "100%" }}>
            <TaskCard title={task.title} description={task.description} />
          </div>
        ))}
      </div>

      <div style={{ flexShrink: 0 }}>
        <UserStats />
      </div>
    </div>
  );
}

export default DashboardPage;

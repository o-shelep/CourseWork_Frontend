import React from "react";
import TaskDetail from "../../components/TaskDetail/TaskDetail";
import Sidebar from "../../components/Sidebar/Sidebar";
import BannerImg from "../../assets/Banner.svg";

function TaskDetailPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          padding: "20px 32px 20px 16px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        <img
          src={BannerImg}
          alt="Description"
          style={{ width: "100%", objectFit: "cover", marginBottom: "16px" }}
        />

        <TaskDetail />
      </div>
    </div>
  );
}

export default TaskDetailPage;

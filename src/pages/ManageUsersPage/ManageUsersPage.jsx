import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const ManageUsersPage = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-container-content">
        <h2>Керування користувачами</h2>
        <p>Тут буде таблиця або список з користувачами.</p>
      </div>
    </div>
  );
};

export default ManageUsersPage;

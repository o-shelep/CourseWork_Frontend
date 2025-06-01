import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const ManageSubmissionsPage = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-container-content">
        <h2>Керування поданнями</h2>
        <p>Список усіх подань від студентів.</p>
      </div>
    </div>
  );
};

export default ManageSubmissionsPage;

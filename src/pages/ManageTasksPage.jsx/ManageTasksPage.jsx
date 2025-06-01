import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const ManageTasksPage = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-container-content">
        <h2>Керування завданнями</h2>
        <p>Список усіх завдань із можливістю редагування та видалення.</p>
      </div>
    </div>
  );
};

export default ManageTasksPage;

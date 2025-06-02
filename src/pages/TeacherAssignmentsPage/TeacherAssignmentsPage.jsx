import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SubmissionCard from "../../components/SubmissionCard/SubmissionCard";
import BannerImg from "../../assets/Banner.svg";
import { useTasks } from "../../hooks/useMyTasks";
import { useUserProfile } from "../../hooks/useUserProfile";
import { formatSubject, truncateDescription } from "../../utils/textUtil";
import "../MyAssignmentsPage/MyAssignmentsPage.css";

function TeacherAssignmentsPage() {
  const token = localStorage.getItem("token");
  const { loading: userLoading, error: userError } = useUserProfile(token);
  const { tasks, error: tasksError } = useTasks();

  if (userLoading) return <p>Завантаження профілю...</p>;
  if (userError) return <p>Помилка: {userError}</p>;

  const tasksToShow = tasks;
  const error = tasksError;

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="dashboard-container-content">
        <img src={BannerImg} alt="St. Mission Banner" />
        {error && <p className="error-message">{error}</p>}
        {tasksToShow.length === 0 && <p>Немає доступних місій.</p>}
        {tasksToShow.map((task) => (
          <div key={task.id} className="task-card-container">
            <SubmissionCard
              id={task.id}
              title={formatSubject(task.title)}
              description={truncateDescription(task.description)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherAssignmentsPage;

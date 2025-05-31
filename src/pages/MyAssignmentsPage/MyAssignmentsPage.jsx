import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskCard from "../../components/TaskCard/TaskCard";
import BannerImg from "../../assets/Banner.svg";
import { useTasks } from "../../hooks/useTasks";
import { useUserProfile } from "../../hooks/useUserProfile";
import { formatSubject, truncateDescription } from "../../utils/textUtil";
import "./MyAssignmentsPage.css";

function MyAssignmentsPage() {
  const token = localStorage.getItem("token");
  const {
    user,
    loading: userLoading,
    error: userError,
  } = useUserProfile(token);
  const { tasks, error: tasksError } = useTasks();

  if (userLoading) return <p>Завантаження профілю...</p>;
  if (userError) return <p>Помилка: {userError}</p>;

  const isPureStudent =
    user &&
    user.roles &&
    user.roles.length === 1 &&
    user.roles.includes("ROLE_STUDENT");

  const tasksToShow = isPureStudent
    ? user.submissions?.map((sub) => sub.task) || []
    : tasks;

  const error = isPureStudent ? userError : tasksError;

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

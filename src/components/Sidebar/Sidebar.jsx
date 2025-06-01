import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import AddIcon from "../../assets/Add.svg";
import TasksIcon from "../../assets/Tasks.svg";
import ManageUsersIcon from "../../assets/Users.svg";
import DashboardIcon from "../../assets/Dashboard.svg";
import Logo from "../../assets/Logo.svg";
import { useUserProfile } from "../../hooks/useUserProfile";

const Sidebar = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const { user, loading, error } = useUserProfile(token);

  if (loading) return null;
  if (error || !user) return null;

  const roles = user.roles || [];
  const isOnlyStudent =
    roles.includes("ROLE_STUDENT") &&
    roles.every((role) => role === "ROLE_STUDENT");
  const isAdmin = roles.includes("ROLE_ADMIN");

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
      </div>

      <nav className="nav">
        <Link
          to="/dashboard"
          className={`nav-item ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          <span className="icon">
            <img src={DashboardIcon} alt="Dashboard" />
          </span>
          <span>Дашборд</span>
        </Link>

        <Link
          to="/assignments"
          className={`nav-item ${
            location.pathname === "/assignments" ? "active" : ""
          }`}
        >
          <span className="icon">
            <img src={TasksIcon} alt="My Assignments" />
          </span>
          <span>Мої місії</span>
        </Link>

        {!isOnlyStudent && (
          <Link
            to="/create"
            className={`nav-item ${
              location.pathname === "/create" ? "active" : ""
            }`}
          >
            <span className="icon">
              <img src={AddIcon} alt="Add" />
            </span>
            <span>Створити</span>
          </Link>
        )}
        {isAdmin && (
          <>
            <Link
              to="/admin/users"
              className={`nav-item ${
                location.pathname === "/admin/users" ? "active" : ""
              }`}
            >
              <span className="icon">
                <img src={ManageUsersIcon} alt="Manage Users" />
              </span>
              <span>Користувачі</span>
            </Link>
          </>
        )}
      </nav>

      <footer className="footer">
        &copy; Усі права захищені <span className="footer-span">|</span> Шелеп
        Ольга
      </footer>
    </div>
  );
};

export default Sidebar;

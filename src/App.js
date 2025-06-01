import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CreateNewPage from "./pages/CreateNewPage/CreateNewPage";
import MyAssignmentsPage from "./pages/MyAssignmentsPage/MyAssignmentsPage";
import TeacherAssignmentsPage from "./pages/TeacherAssignmentsPage/TeacherAssignmentsPage";
import TaskDetailPage from "./pages/TaskDetailPage/TaskDetailPage";
import Login from "./components/LoginForm/LoginForm";
import Register from "./components/SignupForm/SignupForm";
import ManageUsersPage from "./pages/ManageUsersPage/ManageUsersPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/users" element={<ManageUsersPage />} />

        <Route
          path="/assignments"
          element={
            <ProtectedRoute>
              <MyAssignmentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/assignments"
          element={
            <ProtectedRoute>
              <TeacherAssignmentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateNewPage />
            </ProtectedRoute>
          }
        />
        <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

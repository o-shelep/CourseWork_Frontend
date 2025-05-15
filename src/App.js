import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CreateNewPage from "./pages/CreateNewPage/CreateNewPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/assignments" element={<DashboardPage />} />
        <Route path="/create" element={<CreateNewPage />} />
      </Routes>
    </Router>
  );
}

export default App;

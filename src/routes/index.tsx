import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import SettingsPage from "../pages/settings";
import AppLayout from "../pages/appLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="setting" element={<SettingsPage />} />
      </Route>
    </Routes>

  )
}

export default AppRoutes;

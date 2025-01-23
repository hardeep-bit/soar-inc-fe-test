import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/dashboard.page";
import SettingsPage from "../pages/settings.page";
import AppLayoutPage from "../pages/appLayout.page";
import CardsPage from "../pages/cards.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayoutPage />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="setting" element={<SettingsPage />} />
      </Route>
    </Routes>

  )
}

export default AppRoutes;

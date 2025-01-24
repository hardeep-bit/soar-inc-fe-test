import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

//@ts-ignore
const DashboardPage = lazy(() => import('../pages/dashboard.page'))
//@ts-ignore
const AppLayoutPage = lazy(() => import('../pages/appLayout.page'))
//@ts-ignore
const SettingsPage = lazy(() => import('../pages/settings.page'))
//@ts-ignore
const CardsPage = lazy(() => import('../pages/cards.page'))

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

import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const DashboardPage = lazy(() => import('../pages/dashboard.page'))
const AppLayoutPage = lazy(() => import('../pages/appLayout.page'))
const SettingsPage = lazy(() => import('../pages/settings.page'))
const CardsPage = lazy(() => import('../pages/cards.page'))
const NotFoundPage = lazy(() => import('../pages/notfound.page'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayoutPage />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="setting" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>

  )
}

export default AppRoutes;

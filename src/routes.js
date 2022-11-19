import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layout
import AppLayout from "./layout/AppLayout";
import DetailedPage from "./pages/DetailedPage";
import NotFound from "./pages/NotFound";
// pages
import OverallStatistics from "./pages/OverallStatistics";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/covid-stats",
      element: <AppLayout />,
      children: [
        { index: true, element: <Navigate to="/covid-stats/home" /> },
        { path: "home", element: <OverallStatistics /> },
        { path: "country-stats/:id", element: <DetailedPage /> },
      ],
    },
    {
      index: true,
      element: <Navigate to="/covid-stats/home" />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },

    {
      path: "/404",
      element: <NotFound />,
    },
  ]);

  return routes;
}

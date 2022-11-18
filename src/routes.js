import React from "react";
import { useRoutes } from "react-router-dom";
// layout
import AppLayout from "./layout/AppLayout";
import NotFound from "./pages/NotFound";
// pages
import OverallStatistics from "./pages/OverallStatistics";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [{ index: true, element: <OverallStatistics /> }],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
}

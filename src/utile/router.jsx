import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Dashboard from "../component/Dashboard";
import RootElement from "../component/RootElement";

export const router = createBrowserRouter([
  {
    element: <RootElement />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

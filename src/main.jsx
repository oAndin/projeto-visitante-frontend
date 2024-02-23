import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./routes/DashBoard/Index.jsx";
import BarChartsPage from "./routes/Charts/BarChartsPage/Index.jsx";
import HomePage from "./routes/Home/Index.jsx";
import PieChartsPage from "./routes/Charts/PieChartsPage/Index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        // block non adm acess to dashboard
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        // block non adm acess to dashboard
        path: "/dashboard/barchart",
        element: <BarChartsPage />,
      },
      {
        // block non adm acess to dashboard
        path: "/dashboard/piechart",
        element: <PieChartsPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

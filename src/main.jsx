import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./routes/DashBoard/Index.jsx";
import BarChartsPage from "./routes/Charts/BarChartsPage/Index.jsx";
import PizzaChartsPage from "./routes/Charts/PizzaChartsPage/Index.jsx";
import HomePage from "./routes/Home/Index.jsx";

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
        path: "/dashboard/barcharts",
        element: <BarChartsPage />,
      },
      {
        // block non adm acess to dashboard
        path: "/dashboard/pizzacharts",
        element: <PizzaChartsPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import Assets from "./pages/Assets";
import Trade from "./pages/Trade";
import History from "./pages/History";
import Wallet from "./pages/Wallet";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/organization",
        element: <Organization />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/assets",
        element: <Assets />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/trade",
        element: <Trade />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/history",
        element: <History />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
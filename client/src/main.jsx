import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Credit from "./components/burger/credit/Credit";
import Account from "./components/burger/account/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/credit",
    element: <Credit />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

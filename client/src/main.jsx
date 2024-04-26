import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

import App from "./App";

import Credit from "./components/burger/credit/Credit";
import Account from "./components/burger/account/Account";
import Theme from "./components/burger/theme/Theme";

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
  {
    path: "/theme",
    element: <Theme />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

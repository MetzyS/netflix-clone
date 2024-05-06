import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import "./index.css";
import ErrorPage from "./routes/ErrorPage.tsx";
import Signup from "./routes/Signup.tsx";
import Login from "./routes/Login.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import Data from "./data/herocard.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout data={Data} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
        index: true,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

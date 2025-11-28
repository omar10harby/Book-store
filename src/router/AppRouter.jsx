import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import Login from "../pages/Login";
const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "app",

    element: <AppLayout />,
    children: [],
  },
]);
function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;

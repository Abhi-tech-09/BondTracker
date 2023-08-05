import * as React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import Book from "../Pages/Book";
import LoginForm from "../Pages/Login";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          path: "",
          element: <LoginForm />,
        },
        {
            path: "/dashboard", 
            element: <Dashboard/>
        },
        {
          path: "book/:bookId",
          element: <Book />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

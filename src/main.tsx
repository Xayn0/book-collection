import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MainPage } from "./App.tsx";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router";
import { BookOutlined } from "@ant-design/icons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/home",
        element: <div>Home</div>,
      },
      {
        path: "/house",
        element: <div>house</div>,
      },
    ],
  },
]);

function Layout() {
  return (
    <div>
      {/* <Link to={"/"}>Go to /</Link>
      <Link to={"/home"}>Go to /home</Link>
      <Link to={"/house"}>Go to /house</Link> */}
      <BookOutlined />
      <Outlet />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

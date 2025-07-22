import "./index.css";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import { Program } from "./app.tsx";
import { ConfigProvider, theme } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Program   />,
      },
      {
        path: "/view",
        element: <div>View</div>,
      },
      {
        path: "/read",
        element: <div>Read</div>,
      },
    ],
  },
]);

function Layout() {
  return (
    <>
      
        <div className="bg-neutral-700 w-screen h-screen">
          <div className="p-12">
            
            <Outlet />
          </div>
        </div>
      
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

import "./index.css";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router";

import { MainPage } from "./main-page.tsx";
import { ConfigProvider, theme } from "antd";
import { BookView } from "./book-view.tsx";

// address = 'localhost:3000/a/1'
// "/a/:x1" => <A />
// "/b/:x2" => <B />

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
        path: "/book/:bookId",
        element: <BookView />,
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
      <body className="bg-neutral-700 ">
        <div className="">
          <div className="p-12">
            <Outlet />
          </div>
        </div>
      </body>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

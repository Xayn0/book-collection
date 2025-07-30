import "./index.css";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router";

import { MainPage } from "./main-page.tsx";
import { App, ConfigProvider, theme } from "antd";
import { BookPage } from "./book-page.tsx";
import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import { ContextProvider } from "./context-provider.tsx";

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
        element: <BookPage />,
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
      <div className="bg-neutral-800 w-full h-3000">
        <div className="">
          <div className="p-12">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

// 1) spilt to files
// 2) create "Create" form
// 3) use "faker" lib
//

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
    {/* <ContextProvider> */}

    <RouterProvider router={router} />
    {/* </ContextProvider> */}
  </ConfigProvider>
);

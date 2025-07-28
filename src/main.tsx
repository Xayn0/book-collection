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
import { BookPage } from "./book-view.tsx";
import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";

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

const ThemeContext = createContext<ThemeContext>(null as any);

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
    <ContextProvider>
      {/* <Page /> */}
      <RouterProvider router={router} />
    </ContextProvider>
  </ConfigProvider>
);

type Theme = "dark" | "light";

type ThemeContext = {
  theme: Theme;
  isDark: boolean;
  isLight: boolean;

  setLight: () => void;
  setTheme: (theme: Theme) => void;
  setDark: () => void;
  setDefault: () => void;
  toggle: () => void;
};

const defaultTheme: Theme = "dark";

function ContextProvider(props: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext
      value={{
        theme,
        setTheme,
        setLight: () => setTheme("light"),
        toggle: () => (theme === "dark" ? setTheme("light") : setTheme("dark")),
        setDark: () => setTheme("dark"),
        setDefault: () => setTheme(defaultTheme),
        isDark: theme === "dark",
        isLight: theme === "light",
      }}
    >
      {props.children}
    </ThemeContext>
  );
}

function useThemeContext() {
  return useContext(ThemeContext);
}

function Page() {
  const { toggle } = useThemeContext();

  return (
    <>
      <Button onClick={toggle}>Change Theme</Button>
    </>
  );
}

function Button(props: PropsWithChildren<{ onClick: () => void }>) {
  const { isDark } = useThemeContext();

  return (
    <button
      style={{ background: isDark ? "#333" : "#ccc" }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
const ThemeContext = createContext<ThemeContext>(null as any);
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

export function ContextProvider(props: PropsWithChildren) {
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

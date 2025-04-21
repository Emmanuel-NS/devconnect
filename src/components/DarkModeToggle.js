import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button onClick={() =>
      setTheme(t => (t === "light" ? "dark" : "light"))
    }>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

import React, { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div>
      {theme === "light" ? (
        <BiSolidSun onClick={() => setTheme("light")} />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default DarkMode;

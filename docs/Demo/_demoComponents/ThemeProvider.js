import React, { useState } from "react";
import { ThemeContext } from "react-khatra-placeholder";

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkTheme, handleTheme: setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

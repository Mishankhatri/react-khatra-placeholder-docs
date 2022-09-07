import React from "react";
import { useTheme } from "react-khatra-placeholder";

const btnStyle = {
  margin: "1rem 0",
};
const ToggleTheme = () => {
  const { darkTheme, handleTheme } = useTheme();
  return (
    <button
      className="button button--primary"
      style={btnStyle}
      onClick={() => handleTheme(!darkTheme)}
    >
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;

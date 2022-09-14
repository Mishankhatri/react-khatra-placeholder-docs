import React from "react";

const btnStyle = {
  margin: "1rem 0",
};
const ToggleLoading = ({ isLoading, setIsLoading }) => {
  return (
    <button
      className="button button--primary"
      style={btnStyle}
      onClick={() => setIsLoading(!isLoading)}
    >
      Toggle Loading
    </button>
  );
};

export default ToggleLoading;

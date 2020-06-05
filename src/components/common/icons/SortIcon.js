import React from "react";

const SortIcon = ({ onClick, direction }) => {
  return (
    <i
      className={`fas fa-sort${
        direction ? (direction === "desc" ? "-down" : "-up") : ""
      }`}
      onClick={onClick}
    />
  );
};

export default SortIcon;

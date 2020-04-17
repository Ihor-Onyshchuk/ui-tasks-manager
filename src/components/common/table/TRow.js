import React from "react";

export const TdRow = ({ children }) => (
  <tr>
    {React.Children.map(children, (child) => (
      <td>{child}</td>
    ))}
  </tr>
);
export const ThRow = ({ children }) => (
  <tr>
    {React.Children.map(children, (child) => (
      <th>{child}</th>
    ))}
  </tr>
);

import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ name, checked, onChange }) => (
  <input type="checkbox" name={name} checked={checked} onChange={onChange} />
);

export default Checkbox;

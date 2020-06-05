import React, { PureComponent } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import PropTypes from "prop-types";

const Flatpicker = ({ date = new Date(), onChange, options }) => {
  return (
    <Flatpickr
      value={date}
      onChange={onChange}
      options={{
        dateFormat: "Y-m-d",
        ...options,
      }}
    />
  );
};

Flatpicker.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  options: PropTypes.object,
};

export default Flatpicker;

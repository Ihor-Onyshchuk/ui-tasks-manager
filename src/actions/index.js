const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const TOGGLE_SWITCH_BUTTON = "TOGGLE_SWITCH_BUTTON";
const CHANGE_TARIFF_VALUE = "CHANGE_TARIFF_VALUE";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const toggleSwitch = () => {
  return {
    type: TOGGLE_SWITCH_BUTTON
  };
};

export const changeTariffValue = tarif => {
  return {
    type: CHANGE_TARIFF_VALUE,
    tarif
  };
};

import React, { PureComponent, Fragment } from "react";
import "./Calendar.scss";
import { monthFullName, dayWeekFullName } from "../../utils/date/static";

export default class Calendar extends PureComponent {
  state = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    dayInCurrentMonth: new Date(2020, 4, 0).getDate(),
    currentDay: dayWeekFullName[new Date().getDay()],
  };

  handleSelectMonth = (event) => {
    this.setState({
      month: +event.target.value,
    });
  };

  toggleMonth = (direction) => {
    const monthCounter =
      this.state.month >= 11
        ? 0
        : this.state.month === 0
        ? 11
        : this.state.month;

    if (this.state.month >= 11 && direction > 0) {
      this.handleYearChange(direction, monthCounter);
    } else if (this.state.month === 0 && direction < 0) {
      this.handleYearChange(direction, monthCounter);
    }

    this.setState((state) => ({
      month: state.month + direction,
    }));
  };

  handleYearChange = (direction, monthCounter) => {
    this.setState((state) => ({
      year: state.year + direction,
      month: monthCounter,
    }));
  };

  render() {
    const { year, month, dayInCurrentMonth, currentDay } = this.state;
    return (
      <div>
        <div className="d-flex justify-content-around align-items-center">
          <i
            className="fas fa-chevron-left"
            onClick={() => this.toggleMonth(-1)}
          />
          <label className="mb-0">
            <select value={month} onChange={this.handleSelectMonth}>
              {monthFullName.map((month, index) => (
                <option value={index}>{month}</option>
              ))}
            </select>
          </label>
          <div>{year}</div>
          <i
            className="fas fa-chevron-right"
            onClick={() => this.toggleMonth(1)}
          />
        </div>
      </div>
    );
  }
}

{
  /* <label>
  Pick your favorite flavor:
  <select value={this.state.value} onChange={this.handleChange}>
    {" "}
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option value="coconut">Coconut</option>
    <option value="mango">Mango</option>
  </select>
</label>; */
}

// 1. current full name month;
// 2. current year;
// 3.depend of  month show days;
// 4. arrow prev and next;
// 5. fill empty by squares;
// 6. add select month;

///flatpckr.js - link

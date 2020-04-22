import React from "react";
import "./HomePage.scss";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  toggleSwitch,
  changeTariffValue,
  fetchPosts,
  toggleTitleColor,
} from "../../actions";

const HomePage = ({
  counter,
  onInc,
  onDec,
  onToggleSwitch,
  toggleSwitch,
  tarif,
  onChangeTariffValue,
  isLoading,
  isError,
  posts,
  onFetchPosts,
  toggleTitleColor,
  onToggleTitleColor,
}) => {
  return (
    <div>
      <h2 className={toggleTitleColor ? "titleGreen" : "titleRed"}>
        Welcome to Home Page!
      </h2>
      <button onClick={() => onToggleTitleColor()}>Change title color</button>
      <h3>{counter}</h3>
      <button onClick={() => onInc()}>+</button>
      <button onClick={() => onDec()}>-</button>
      <button
        onClick={() => onToggleSwitch()}
        className={`${toggleSwitch === true ? "switchedButton" : ""}`}
      >
        toggle color
      </button>
      <label>Choose tarif:</label>

      <select
        value={tarif}
        onChange={(event) => onChangeTariffValue(event.target.value)}
      >
        <option value="free">free</option>
        <option value="medium">medium</option>
        <option value="premium">premium</option>
      </select>

      <div>
        <button onClick={() => onFetchPosts()}>getUsers</button>
        <div>
          {isLoading && <span>Loading...</span>}
          {isError && !isLoading && <span>Error</span>}
        </div>
        <div>
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  counter,
  toggleSwitch,
  tarif,
  isError,
  isLoading,
  posts,
  toggleTitleColor,
}) => ({
  counter,
  toggleSwitch,
  tarif,
  isLoading,
  isError,
  posts,
  toggleTitleColor,
});

// const mapDispatchToProps = dispatch => ({
//   onInc: () => dispatch(increment()),
//   onDec: () => dispatch(decrement()),
//   onToggleSwitch: () => dispatch(toggleSwitch()),
//   onChangeTariffValue: tarif => dispatch(changeTariffValue(tarif))
// });

const mapDispatchToProps = {
  onInc: increment,
  onDec: decrement,
  onToggleSwitch: toggleSwitch,
  onChangeTariffValue: changeTariffValue,
  onFetchPosts: fetchPosts,
  onToggleTitleColor: toggleTitleColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React from "react";
import "./HomePage.scss";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
import { TasksList } from "../../containers/TasksList";

const HomePage = () => {
  return (
    <div>
      <h2 className="font-weight-bold pb-2 alert display-4">
        Welcome to Home Page!
      </h2>
      <TasksList />
    </div>
  );
};

export default HomePage;

// const mapStateToProps = ({ isError, isLoading, posts }) => ({
//   isLoading,
//   isError,
//   posts
// });

// // const mapDispatchToProps = dispatch => ({
// //   onToggleSwitch: () => dispatch(toggleSwitch()),
// //   onChangeTariffValue: tarif => dispatch(changeTariffValue(tarif))
// // });

// const mapDispatchToProps = {
//   onChangeTariffValue: changeTariffValue,
//   onFetchPosts: fetchPosts
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

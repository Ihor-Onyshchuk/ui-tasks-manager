import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Home Page!</h2>
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

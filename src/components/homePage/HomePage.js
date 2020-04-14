import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h2 className="font-weight-bold pb-2 mt-5 alert display-4">
            Welcome to Home Page!
          </h2>
        </div>
      </div>
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

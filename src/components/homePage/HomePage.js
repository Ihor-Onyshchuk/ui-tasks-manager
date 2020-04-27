import React from "react";
import "./HomePage.scss";
import { connect } from "react-redux";

const HomePage = () => {
  return (
    <div className="home container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <h2 className="font-weight-bold pb-2 mt-5 alert display-4">
            Welcome to Groovy tasks manager!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


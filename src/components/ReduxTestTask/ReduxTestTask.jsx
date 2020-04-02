import React, { Component } from 'react';
import { connect } from 'react-redux';
// import 

export default class ReduxTesTask extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <button>Add 2</button>
      </div>
    );
  }
}

const mapStateToProps = ({});
const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTesTask);
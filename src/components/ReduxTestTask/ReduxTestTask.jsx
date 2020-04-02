import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementByTwo } from '../../actions/index';

export class ReduxTesTask extends Component {
  render() {
    const { onIncByTwo, counterByTwo } = this.props;

    return (
      <div>
        <h1>{counterByTwo}</h1>
        <button onClick={() => onIncByTwo()}>Add 2</button>
      </div>
    );
  }
}

const mapStateToProps = ({
  counterByTwo,
}) => ({
  counterByTwo,
});

const mapDispatchToProps = {
  onIncByTwo: incrementByTwo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTesTask);
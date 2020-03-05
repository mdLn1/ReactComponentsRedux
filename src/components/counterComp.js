import React, { Component, Fragment } from "react";
class Counter extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;
    return (
      <Fragment>
        <h1>{counter}</h1>
        <div>
          <button onClick={increment}>INCREMENT BY 1</button>
        </div>
        <div>
          <button onClick={decrement}>DECREMENT BY 1</button>
        </div>
        <button onClick={reset}>RESET</button>
      </Fragment>
    );
  }
}
export default Counter;

import React from "react";
import { RootContext } from "../../../App";
import { Link } from "react-router-dom";

class Counter extends React.Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <>
              <Link to="/">BACK</Link>
              <h1>THIS IS COUNTER PAGE</h1>
              <button onClick={() => value.action({ type: "MINUS" })}>-</button>
              <h2>{value.state.totalOrder}</h2>
              <button onClick={() => value.action({ type: "PLUS" })}>+</button>
            </>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

export default Counter;

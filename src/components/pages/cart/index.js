import React from "react";
import { RootContext } from "../../../App";
import { Link } from "react-router-dom";
class Cart extends React.Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <>
              <Link to="/">BACK</Link>
              <h1>THIS IS CART PAGE</h1>
              <h2>TOTAL ORDER: {value.state.totalOrder}</h2>
            </>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

export default Cart;

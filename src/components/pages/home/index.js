import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>THIS IS HOME PAGE</h1>
        <Link to="/counter">TO COUNTER PAGE</Link>
        <br />
        <br />
        <br />
        <Link to="/cart">TO CART PAGE</Link>
      </>
    );
  }
}

export default Home;

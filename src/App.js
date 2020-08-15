import React, { createContext } from "react";
import Home from "./components/pages/home";
import Counter from "./components/pages/counter";
import Cart from "./components/pages/cart";
import { ActionType } from "./components/context/action";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const RootContext = createContext();

const Provider = RootContext.Provider;

class App extends React.Component {
  state = {
    totalOrder: 0,
  };

  action = (action) => {
    if (action.type === ActionType.PLUS) {
      this.setState({ totalOrder: this.state.totalOrder + 1 });
    }

    if (action.type === ActionType.MINUS) {
      this.setState({ totalOrder: this.state.totalOrder - 1 });
    }

    if (action.type === ActionType.MINUS && this.state.totalOrder === 0) {
      this.setState({ totalOrder: 0 });
    }
  };

  render() {
    return (
      <Router>
        <Provider
          value={{
            state: this.state,
            action: this.action,
          }}
        >
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/cart" component={Cart} />
        </Provider>
      </Router>
    );
  }
}

export default App;

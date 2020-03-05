import React, { Component } from "react";
// import Login from "./components/login";
import LoginRedux from "./components/loginReduxContainer";
import Counter from "./components/counterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Login /> */}
        <LoginRedux />
      </div>
    );
  }
}

export default App;

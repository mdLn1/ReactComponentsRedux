import React, { Component, Fragment } from "react";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, username: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
  };

  logout = () => {
    this.setState({ loggedIn: false });
  };


  render() {
    const { loggedIn, username, password } = this.state;
    return (
      <div style={{margin: "10rem"}}>
        {loggedIn ? (
          <Fragment>
            <h1>You are now logged in</h1>
            <button onClick={this.logout}>Log out</button>
          </Fragment>
        ) : (
          <Fragment>
            <input
              type="text"
              style={{ display: "block" }}
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              style={{ display: "block" }}
              value={password}
              onChange={this.handleChange}
            />
            <button style={{ display: "block" }} onClick={this.handleClick}>
              Login
            </button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Login;

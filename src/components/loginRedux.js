import React, { Component, Fragment } from "react";

class loginRedux extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  render() {
    const { auth, logout } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        {auth.loggedIn ? (
          <Fragment>
            <h1>Logout</h1>
            <br />
            <div>Hello, {auth.user.email}!</div>
            <button onClick={logout}>Logout</button>
          </Fragment>
        ) : (
          <Fragment>
            <h1>Login</h1>
            {auth.loading && <h2>Loading</h2>}
            <br />
            <div>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              {auth.errors && auth.errors.length > 0 ? (
                auth.errors.map((el, index) => <div key={index}>{el}</div>)
              ) : (
                <span>No errors</span>
              )}
              <button onClick={this.login}>Login</button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default loginRedux;

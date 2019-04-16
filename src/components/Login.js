import React from "react";
import { Redirect } from "react-router-dom";


class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
        <>
        { !Object.keys(this.props.user).length > 0 ? (
            <form onSubmit={this.submitHandler}>
              <input className="uk-input uk-border-rounded"
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={this.changeHandler}
              />
              <input className="uk-input uk-border-rounded"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
              <button className="uk-button uk-button-default">Log In</button>
            </form>
        ) : (
        <Redirect to="/home" />
      )}
        </>


    );
  }
}

export default Login;

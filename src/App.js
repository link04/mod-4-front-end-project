import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConversationsList from './chatComponents/ConversationsList'
import { Link, Route, Switch, withRouter } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";


class App extends Component {
  state = {
    user: {},
    posts:[]
  };

  componentDidMount = () => {
    let token = localStorage.token;
    token
      ? fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(user => {
            this.setState({ user }, () => {
              console.log(user);
              this.props.history.push("/home");
            });
          })
      : this.props.history.push("/signup");
      this.getAllAvailablePosts();
  };

  signupSubmitHandler = userInfo => {
    userInfo.password_confirmation = userInfo.passwordConfirmation;
    delete userInfo.passwordConfirmation;
    console.log(userInfo);


   fetch("http://localhost:3000/api/v1/users", {
     method: "POST",
     headers: {
       "content-type": "application/json",
       accepts: "application/json"
     },
     body: JSON.stringify({ user: userInfo })
   })
   .then((response) => {
      if (response.ok) {
      return response.json();
      } else {
        response.json().then(shit => alert(shit.errors[0]));
        throw new Error('Something went wrong');
      }
    })
    .then(userDataGet =>
       this.setState({
       user: userDataGet.user
       }, () =>  {
         localStorage.setItem("token", userDataGet.jwt)
         this.props.history.push("/home")
       }))
    .catch((error) => {
      console.log(error)
    });



 };

 getAllAvailablePosts = () => {
    fetch("http://localhost:3000/api/v1/posts")
      .then(resp => resp.json())
      .then(postData => {
        this.setState({ posts: postData});
      });
  };

 loginSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData =>

        {
          if(userData.user !== undefined){
            fetch("http://localhost:3000/api/v1/users/" + userData.user.id)
            .then(resp => resp.json())
            .then(userDataGet => {
              this.setState({
                user: userDataGet
              }, () =>  {
                localStorage.setItem("token", userData.jwt)
                this.props.history.push("/home")})
            })
          }else {
            alert("User data invalid or not existing.")
          }
        }

      );
  };
  handleLogout = () => {
    this.setState({
      user: {},
      posts:[]
    })
      localStorage.removeItem("token");
      this.props.history.push("/login");
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mollify</h1>
        </header>
        <div className="master-detail">
          <ConversationsList />

          {/*<ul>
            {Object.keys(this.state.user).length > 0 ?
              <>
              <Link to="/home">
              <li>Home</li>
              </Link>
              <Link to="logout" onClick={this.handleLogout}>
              <li>Log Out</li>
              </Link>
              </>
            )
            :
            (
              <>
              <Link to="/signup">
              <li>Sign Up</li>
              </Link>
              <Link to="/login" >
              <li>Log In</li>
              </Link>
              </>
            )
          }

          </ul>*/}

          {/*<Switch>
            <Route
            path="/signup"
            render={() => <Signup user={this.state.user} submitHandler={this.signupSubmitHandler} />}
            />
            <Route
            exact
            path="/login"
            render={() => <Login  user={this.state.user} submitHandler={this.loginSubmitHandler} />}
            />
            <Route path="/home" render={() => <Home post={this.state.posts} user={this.state.user} />} />

            <Route path="/"  />
            </Switch>*/}
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default withRouter(App);

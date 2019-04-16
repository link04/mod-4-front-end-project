import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, withRouter } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";


class App extends Component {
  state = {
    user: {},
    posts:[]
  };

  componentDidMount(){
    this.getAllAvailablePosts();
  }

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
     .then(resp => resp.json())
     .then(userDataGet => {
       if(userDataGet.ok) {
       this.setState({
         user: userDataGet.user
       }, () =>  {
         localStorage.setItem("token", userDataGet.jwt)
         this.props.history.push("/home")})
       } else {
         alert(userDataGet.errors[0]);
       }
     })


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
      // localStorage.removeItem("token");
      this.props.history.push("/login");
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mollify</h1>

          <ul>
            {this.state.user.id > 0 ?
              <>
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="login" onClick={this.handleLogout}>
                  <li>Log Out</li>
                </Link>
                </>
                :
                <>
                <Link to="/signup">
                  <li>Sign Up</li>
                </Link>
                <Link to="/login">
                  <li>Log In</li>
                </Link>
                </>
            }

          </ul>

           <Switch>
             <Route
               path="/signup"
               render={() => <Signup submitHandler={this.signupSubmitHandler} />}
             />
             <Route
               exact
               path="/login"
               render={() => <Login submitHandler={this.loginSubmitHandler} />}
             />
             <Route
               path="/signup"
               render={() => <Signup submitHandler={this.signupSubmitHandler} />}
             />
           <Route path="/home" render={() => <Home post={this.state.posts} user={this.state.user} />} />

             <Route path="/"  />
           </Switch>
        </header>
      </div>
    );
  }
}

export default withRouter(App);

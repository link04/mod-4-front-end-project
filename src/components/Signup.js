import React from "react";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    name:"",
    role:"",
    gender:""
  };

  componentDidMount(){
    this.setState({
      email: "",
      password: "",
      passwordConfirmation: "",
      name:"",
      role:"",
      gender:""
    });
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if(this.state.password === this.state.passwordConfirmation)
    {
      this.props.submitHandler(this.state);
    } else {
      alert('Password and Confirmation do not match.');
    }
  };

  render() {



    return (
      <div className="width-form" >
        <form onSubmit={this.submitHandler}>
          <input className="uk-input uk-border-rounded" required
            type="text"
            placeholder="Full Name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <select className="uk-input uk-border-rounded" required
            value={this.state.gender}
            onChange={this.changeHandler}
            name="gender">
            <option value="" >Select Your Gender</option>
             <option value="Male" >Male</option>
             <option value="Female" >Female</option>
             <option value="Transgender" >Transgender</option>
             <option value="Non-Binary" >Non-Binary</option>
             <option value="Other" >Other</option>
           </select>

           <select className="uk-input uk-border-rounded" required
             value={this.state.role}
             onChange={this.changeHandler}
             name="role">
              <option value="" >Select Your Role</option>
              <option value="Student" >Student</option>
              <option value="Counselor" >Counselor</option>
            </select>

          <input className="uk-input uk-border-rounded" required
            type="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <input className="uk-input uk-border-rounded" required
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <input className="uk-input uk-border-rounded" required
            name="passwordConfirmation"
            type="password"
            placeholder="Password Confirmation"
            value={this.state.passwordConfirmation}
            onChange={this.changeHandler}
          />
        <button className="uk-button uk-button-default">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;

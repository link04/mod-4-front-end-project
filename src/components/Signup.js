import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText , Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <>
      { !Object.keys(this.props.user).length > 0 ? (
      <Col sm="3" md={{ size: 4, offset: 4 }}>
        <div className="width-form" >
          <Form className="text-center" onSubmit={this.submitHandler}>
            <h2>Sing Up Form</h2>
            <FormGroup>
              <Label for="gender">Full Name</Label>
              <Input  required
                type="text"
                placeholder="Full Name"
                name="name"
                value={this.state.name}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="gender">Role</Label>
              <Input type="select" required
                value={this.state.gender}
                onChange={this.changeHandler}
                name="gender">
                <option value="" >Select Your Gender</option>
                 <option value="Male" >Male</option>
                 <option value="Female" >Female</option>
                 <option value="Transgender" >Transgender</option>
                 <option value="Non-Binary" >Non-Binary</option>
                 <option value="Other" >Other</option>
               </Input>
             </FormGroup>
            { /*
              <Label for="exampleSelect">Role</Label>
              <Input type="select" className="uk-input uk-border-rounded" required
                value={this.state.role}
                onChange={this.changeHandler}
                name="role">
                 <option value="" >Select Your Role</option>
                 <option value="Student" >Student</option>
                 <option value="Counselor" >Counselor</option>
               </select>
            */}
            <FormGroup>
              <Label for="gender">Full Email</Label>
              <Input  required
                type="email"
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Input required
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Input  required
                name="passwordConfirmation"
                type="password"
                placeholder="Password Confirmation"
                value={this.state.passwordConfirmation}
                onChange={this.changeHandler}
              />
            </FormGroup>

          <Button color="primary">Sign Up</Button>
          </Form>
        </div>
      </Col>

     ) : (
       <Redirect to="/home" />
     )
     }
     </>

    );
  }
}

export default Signup;

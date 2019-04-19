import React from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText , Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    if(Object.keys(this.props.user).length > 0){
      this.setState({
        email: "",
        password: ""
      });
    }
  };
  render() {
    return (
        <>
        { !Object.keys(this.props.user).length > 0 ? (
           <Col sm="3" md={{ size: 4, offset: 4 }}>
            <Form autoComplete="off" className="text-center" onSubmit={this.submitHandler}>
              <h2>Log In Form</h2>

              <FormGroup>
                <Label for="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
              </FormGroup>
              <FormGroup>
                <Label for="email">Password</Label>
              <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.changeHandler}
                />
              </FormGroup>
              <Button color="primary">Log In</Button>
            </Form>
          </Col>

        ) : (
        <Redirect to="/home" />
      )}
        </>


    );
  }
}

export default Login;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleClick = () =>{
    if (window.confirm("Do you really want to log out?")) {
      this.props.handleLogout();
    }
  }

  handleClickedLink = (location) => {
    this.props.history.push(location);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar  color="dark" light expand="md">
          <NavbarBrand className="link" onClick={() => this.handleClickedLink('/home')} >
              Mollify
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { Object.keys(this.props.user).length > 0 ?
              <>
              <NavItem>
                <NavLink className="link" onClick={() => this.handleClickedLink('/conversationsList')} >
                    Conversation Channels
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="link" nav caret>
                  {this.props.user.name}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem  className="link"  >
                  <NavLink onClick={() => this.handleClickedLink('/home')} >
                      Profile??
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem style={{backgroundColor: 'red', color:'white'}}  >
                    <NavItem onClick={this.handleClick}>
                      Log Out
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </>
              :
              <>
                <NavItem onClick={() => this.handleClickedLink('/login')} >
                  <NavLink className="link" >
                      Log In
                  </NavLink>
                </NavItem>
                <NavItem onClick={() => this.handleClickedLink('/signup')} >
                  <NavLink className="link" >
                      Sign Up
                  </NavLink>
                </NavItem>
              </>
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

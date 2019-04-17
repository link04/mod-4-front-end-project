import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">Mollify</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { !Object.keys(this.props.user).length > 0 ?
              <>
              <NavItem>
                <NavLink href="/Home/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink onClick={this.props.handleLogout} href="/">Profile?</NavLink>
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
                <NavItem>
                  <NavLink href="/login">Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign Up</NavLink>
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

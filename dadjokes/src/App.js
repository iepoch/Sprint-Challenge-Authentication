import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="home">Dad Jokes</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" exact>
                Home
                {" "}
                {" "}
                <br/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" exact>
                Sign Up
                 {" "}
                {" "}
                <br />
              </NavLink>
            </NavItem>
            <NavItem>

              <NavLink to="/signin" exact>
                {" "}
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Route } from "react-router-dom";
import Signup from "./Authenticate/Signup";
import Signin from "./Authenticate/Signin"
import Jokes from "./Jokes/Jokes";
// Home Defined
const Home = props => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="home">Dad Jokes</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "black" }}
                exact
              >
                Home
                &nbsp;|&nbsp;
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
                exact
              >
                Sign Up
                &nbsp;|&nbsp;
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/signin"
                style={{ textDecoration: "none", color: "black" }}
                exact
              >
                {" "}
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {/* Routes To the paths */}
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/jokes' component={Jokes} exact />

      </div>
    );
  }
}

export default App;

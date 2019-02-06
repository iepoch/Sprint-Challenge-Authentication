import React, { Component } from "react";
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../index.css";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };
  handleInputChange = e => {
    e.preventDefault();
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const creds = this.state;
    const endpoint = "http://localhost:3300/api/register";
    axios
      .post(endpoint, creds)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/signin");
      })
      .catch(err => {
        console.log("error creating login", err);
      });
  };
  render() {
    return (
      <div className="form_signup">
        <Form>
          <h1>Register Here</h1>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit}>Sign Up</Button>
      </div>
    );
  }
}

export default Signup;

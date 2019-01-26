import React, {Component} from 'react'
// import axios from 'axios'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'



class Signup extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input type='text' name='username' id='username'
                            value={this.state.username}
                            onChange={this.handleInputChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='text' name='password' id='password'
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                    </FormGroup>
                </Form>
            <Button>Submit</Button>
            </div>
        )
    }
}


export default Signup
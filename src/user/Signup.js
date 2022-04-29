import React, { Component } from 'react'
import {Container, Form, Button} from "react-bootstrap"

export default class Signup extends Component {

    state= {}

    changeHandler = (e) => {
        let temp = {... this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
    }

    registerHandler = () => {
        this.props.register(this.state);
    }

  render() {
      console.log(this.state)
    return (
      <div>
          <br/>
          
          <h1 id='signuph1'>Sign Up</h1>
          <br/>
          <div>
          <Container>
              <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name="firstName" onChange={this.changeHandler} placeholder='First Name'></Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="lastName" onChange={this.changeHandler} placeholder='Last Name'></Form.Control>
              </Form.Group>

              <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control name="emailAddress" onChange={this.changeHandler} placeholder='Email Address'></Form.Control>
                  <Form.Text className='text-muted'>Enter a valid email</Form.Text>
              </Form.Group>

              <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" onChange={this.changeHandler} placeholder='Password'></Form.Control>
                  <Form.Text className='text-muted'>Enter a valid password</Form.Text>
              </Form.Group>

              <Button id='signupbutton' varient="primary" onClick={this.registerHandler}>
                  Register
                  </Button>
          </Container>
          </div>
      </div>
    )
  }
}

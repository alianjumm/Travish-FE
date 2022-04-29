import React, { Component } from 'react'
import {Container, Form, Button} from "react-bootstrap"

export default class Signin extends Component {

    state= {}

    changeHandler = (e) => {
        let temp = {... this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
    }

    loginHandler = () => {
        this.props.login(this.state)
    }

  render() {
      console.log(this.state)
    return (
      <div>
          <h1 id='signinh1'>Sign In</h1>
          <Container>
              <Form.Group className="mb-3" controlId='formBasicEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control name="emailAddress" onChange={this.changeHandler} placeholder='Enter Email'></Form.Control>
                  <Form.Text className='text-muted'>Enter a valid email</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" onChange={this.changeHandler} placeholder='Password'></Form.Control>
              </Form.Group>

              <Button id='signinbutton' varient="primary" onClick={this.loginHandler}>
                  Login
                  </Button>
          </Container>
      </div>
    )
  }
}

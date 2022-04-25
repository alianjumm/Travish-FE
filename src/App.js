import React, { Component } from 'react'

import Signup from './user/Signup'
import Signin from './user/Signin'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Axios from 'axios';



export default class App extends Component {

  state = {
    isAuth: false,
    user: null,
    message: null,
  }

  registerHandler = (user) => {
    Axios
      .post("auth/signup", user)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
      .then(response => {
        console.log(response.data.token);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <Router>
        

          <br />
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">Travish</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/signin">Signin</Nav.Link>
              </Nav>
            </Container>
          </Navbar>









          {/* <nav>
            <div>
              <Link >Home</Link> {" "}
              <Link </Link> &nbsp;
              <Link to="/signin">Signin</Link> &nbsp;
            </div>
          </nav> */}

          <div>
            <Routes>
              {/* <Route path="/" element={<AuthorList/>}></Route> */}
              <Route path="/signup" element={<Signup register={this.registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={this.loginHandler} />}></Route>
            </Routes>
          </div>


        </Router>
      </div>
    )
  }
}

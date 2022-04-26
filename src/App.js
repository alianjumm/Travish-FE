import React, { Component } from 'react'
import WishListList from './wishList/WishListList'

import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './travish/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Axios from 'axios';
import Discover from './travish/Discover';
import {LinkContainer} from 'react-router-bootstrap'



export default class App extends Component {

  state = {
    isAuth: false,
    user: null,
    message: null,
  }

  registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then(response => {
        this.setState({
          user: response.data,
          isAuth: true
        })
        console.log(response);

      })
      .catch(error => {
        console.log(error);
      })
  }

  loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
      .then(response => {
        this.setState({
          user: response.data,
          isAuth: true
        })
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
                
                {this.state.isAuth ?
                 <Link to="/wishList">Wish List</Link>
                 :
                 <>
                 <Link to="/home">Home</Link> 
                 <Link to="/discovery">Discovery</Link>
                
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
                </>
                }
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

          
            <Routes>
              <Route path="/signup" element={<Signup register={this.registerHandler} />}></Route>
              <Route path="/signin" element={<Signin login={this.loginHandler} />}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/discover" element={<Discover/>}></Route>
              <Route path="/wishList" element={<WishListList/>}></Route>
            </Routes>
          


        </Router>
      </div>
    )
  }
}

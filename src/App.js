import React, { Component } from 'react'
import WishListList from './wishList/WishListList'

import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './travish/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './user/Logout';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Axios from 'axios';
import Discover from './travish/Discover';
import jwtDecode from 'jwt-decode'
import { LinkContainer } from 'react-router-bootstrap'
import VacationList from './vacation/VacationList';
import WishListDetail from './wishList/WishListDetail';



export default class App extends Component {

  state = {
    isAuth: false,
    user: null,
    message: null,
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = jwtDecode(token)
      if (user) {
        this.setState({
          isAuth: true,
          user: user
        })
      }
      else {
        localStorage.removeItem("token")
        this.setState({
          isAuth: false
        })
      }
    }
  }

  registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
  }

  loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
      .then((result) => {
        console.log(result.data.token)

        if (result.data.token) {
          localStorage.setItem("token", result.data.token)
          let user = jwtDecode(result.data.token)

          this.setState({
            isAuth: true,
            user: user
          })
        }

      }).catch((err) => {
        console.log(err)
        this.setState({
          isAuth: false,
        })
      });
  }

  logoutHandler = (e) => {
    localStorage.removeItem("token")
    this.setState({
      isAuth: false,
      user: null
    })
  }

  viewWishList = (e) => {

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
                  <>
                    <Link to="/wishList">Wish List</Link>
                    <Link to="/signout" onClick={this.logoutHandler}>Logout</Link>
                    <Link to="/discovery">Discovery</Link>
                    <Link to="/myVacations">My Vacations</Link>
                  </>
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
            {this.state.isAuth ?
              <>
                <Route path="/wishList" element={<WishListList />}></Route>
                <Route path="/signout" element={<Logout logout={this.logoutHandler} />}></Route>
                <Route path="/myVacations" element={<VacationList />}></Route>
                <Route path="/wishlist/:id" element={<WishListDetail/>}></Route>
              </>
              :
              <>
                <Route path="/signup" element={<Signup register={this.registerHandler} />}></Route>
                <Route path="/signin" element={<Signin login={this.loginHandler} />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/discover" element={<Discover />}></Route>
              </>
            }
          </Routes>



        </Router>
      </div>
    )
  }
}

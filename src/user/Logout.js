import React, { Component } from 'react'

export default class Logout extends Component {

    state= {}

    changeHandler = (e) => {
        let temp = {... this.state}
        temp[e.target.name] = e.target.value;
        this.setState(temp)
    }

    logoutHandler = () => {
        this.props.Logout(this.state)
    }



  render() {
    return (
      <div>You are successfully logged out!</div>
    )
  }
}

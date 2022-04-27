import React, { Component } from 'react'

export default class Vacation extends Component {



  render() {
    return (
     <>
                <td>{this.props.destination}</td>
                <td>{this.props.flight}</td>
                <td>{this.props.activities}</td>
                <td><button onClick={() => { this.props.deleteVacation(this.props._id) }}>Delete</button></td>
            </>
        )
    }
}

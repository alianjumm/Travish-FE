import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

export default class Vacation extends Component {



  render() {
    return (
     <>
                <Card.Body>
                <Card.Title><b>{this.props.destination}</b></Card.Title>
                <Card.Text><b>Flight:</b> {this.props.flight}</Card.Text>
                <Card.Text><b>Activities:</b> {this.props.activities}</Card.Text>
                <button variant='dark' onClick={() => { this.props.deleteVacation(this.props._id) }}>Delete</button>
                </Card.Body>
            </>
        )
    }
}

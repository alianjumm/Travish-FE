import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';

export default class WishList extends Component {

// loadVacationList = (vacations) => {
//     axios.get
// }

    render() {
        let path = "/wishlist/" + this.props._id
        return (
            <>  <Card.Body>
                <Card.Title><b>{this.props.name}</b></Card.Title>
                <Card.Text><b>Description:</b> {this.props.description}</Card.Text>
                <Card.Text>{this.props.visited}</Card.Text>
                <button variant='dark' onClick={() => { this.props.editList(this.props._id) }}>Edit</button>
                <button variant='dark' onClick={() => { this.props.viewWishList(this.props._id) }}> <Link to= {path}>View</Link></button>
                <button variant='dark' onClick={() => { this.props.deleteWishList(this.props._id) }}>Delete</button>
                </Card.Body>
            </>
        )
    }
}

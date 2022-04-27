import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WishList extends Component {

// loadVacationList = (vacations) => {
//     axios.get
// }

    render() {
        let path = "/wishlist/" + this.props._id
        return (
            <>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{this.props.visited}</td>
                <Link to= {path}>View</Link>
                <td><button onClick={() => { this.props.editList(this.props._id) }}>Edit</button></td>
                <td><button onClick={() => { this.props.viewWishList(this.props._id) }}>View</button></td>
                <td><button onClick={() => { this.props.deleteWishList(this.props._id) }}>Delete</button></td>
            </>
        )
    }
}

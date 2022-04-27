import React, { Component } from 'react'

export default class WishList extends Component {
    render() {
        return (
            <>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{this.props.visited}</td>
                <td><button onClick={() => { this.props.editList(this.props._id) }}>Edit</button></td>
                <td><button onClick={() => { this.props.editWishList(this.props._id) }}>View</button></td>
                <td><button onClick={() => { this.props.deleteWishList(this.props._id) }}>Delete</button></td>
            </>
        )
    }
}

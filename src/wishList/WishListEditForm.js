import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'


export default class WishListEditForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newWishList: props.wishList
        }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const wishList = { ...this.state.newWishList }
        wishList[attributeToChange] = newValue

        this.setState({
            newWishList: wishList
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editWishList(this.state.newWishList)
    }

    render() {
        console.log(this.state.newWishList)
        return (
            <div className='edit'>
                <hr/><br/>
                <h1>Edit WishList</h1>

                <form onSubmit={this.handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" onChange={this.handleChange}></Form.Control>
                        <Form.Text className="text-muted">
                            Enter a name for your wishlist!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" type="text" onChange={this.handleChange}></Form.Control>
                        <Form.Text className="text-muted">
                            Enter a description for your wishlist!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Visited Yet?</Form.Label>
                        <Form.Control name="visited" type="boolean" onChange={this.handleChange}></Form.Control>
                        <Form.Text className="text-muted">
                            Have you Visited Your WishList?
                        </Form.Text>
                    </Form.Group>

                    <div>
                        <Button variant='dark' type="submit">Save Changes</Button>
                    </div>
                </form>
            </div>
        )
    }
}


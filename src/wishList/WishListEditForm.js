import React, { Component } from 'react'

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
        this.props.editList(this.state.newWishList)
    }

    render() {
        console.log(this.state.newWishList)
        return (
            <div>
                <h1>Edit WishList</h1>

                <form onSubmit={this.handleSubmit}>

                <div>
                  <label>Name</label>
                  <input name="name" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <label>Email Address</label>
                  <input name="emailAddress" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <label>Phone Number</label>
                  <input name="phoneNumber" type="number" onChange={this.handleChange}></input>
              </div>

                    <div>
                        <input type="submit" value="Edit List"></input>
                    </div>
                </form>
            </div>
        )
    }
}


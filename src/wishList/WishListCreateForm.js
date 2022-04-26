import React, { Component } from 'react'

export default class WishListCreateForm extends Component {

constructor(props) {
  super(props)

  this.state = {
     newWishList: {}
  }
}

    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const wishList = {...this.state.newWishList}
        wishList[attributeToChange] = newValue

        this.setState({
            newWishList: wishList
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addWishList(this.state.newWishList)
    }
    




  render() {
      console.log(this.state.newWishList)
    return (
      <div>
          <h1>Create a WishList</h1>

          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>Name</label>
                  <input name="name" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <label>Description</label>
                  <input name="description" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <label>Visited ?</label>
                  <input name="visited" type="boolean" onChange={this.handleChange}></input>
              </div>

              <div>
                  <input type="submit" value="Add Wish List!"></input>
              </div>
          </form>
      </div>
    )
  }
}

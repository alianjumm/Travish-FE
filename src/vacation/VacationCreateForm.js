import React, { Component } from 'react'
const token = localStorage.getItem("token")
console.log(token)
export default class VacationCreateForm extends Component {

constructor(props) {
  super(props)

  this.state = {
     newVacation: {}
  }
}



    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const vacation = {...this.state.newVacation}
        vacation[attributeToChange] = newValue

        this.setState({
            newVacation: vacation
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addVacation(this.state.newVacation)
    }
    




  render() {
      console.log(this.state.newVacation)
    return (
      <div>
          <h1>Add a Vacation</h1>

          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>Destination</label>
                  <input name="destination" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <label>Flights</label>
                  <input name="flight" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <label>Activities</label>
                  <input name="visited" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <label>WishList</label>
                  <input name="visited" type="text" onChange={this.handleChange}></input>
              </div>

              <div>
                  <input type="submit" value="Add Vacation!"></input>
              </div>
          </form>
      </div>
    )
  }
}
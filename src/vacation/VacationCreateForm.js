import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
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

        const vacation = { ...this.state.newVacation }
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
            <div className='vacation-add'>
                <br/>
                <h1>Add a Vacation</h1>

                <form onSubmit={this.handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Destination</b></Form.Label>
                        <Form.Control name="destination" type="text" onChange={this.handleChange}></Form.Control>
                        <Form.Text className="text-muted">
                            Enter a destination for your vacation!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Flights</b></Form.Label>
                        <Form.Control name="flight" type="text" onChange={this.handleChange}></Form.Control>
                        <Form.Text className="text-muted">
                            What Airline or Flight Number?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label><b>Activities</b></Form.Label>
                        <Form.Control name="activities" type="text" onChange={this.handleChange} rows={3} />
                        <Form.Text className="text-muted">
                            Activities to do there?
                        </Form.Text>
                    </Form.Group>

                    <div>
                        <Button variant='dark' type="submit">Add New Vacation!</Button>
                    </div>
                </form>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Vacation from './Vacation';
import axios from 'axios';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import VacationCreateForm from './VacationCreateForm';


export default class VacationList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vacations: [],
            currentVacation: ""
        }
    }

    componentDidMount() {
        this.loadVacation();
    }

    loadVacation =async() => {
        let res = await axios.get("/vacation/index")
        this.setState({vacations: res.data})
    }

    addVacation = (vacation) => {
        console.log(vacation)
        axios.post("/vacation/add", vacation)
        .then((response) => {
            console.log("vacation added successfully!")
            this.loadVacation();
        })
        .catch(error => {
            console.log("Error Adding Vacation");
            console.log(error);
        })
    }

    deleteVacation = (id) => {
        axios.delete(`/vacation/delete?id=${id}`)
            .then(response => {
                console.log("Deleted Vacation!!!")
                this.loadVacation();
            })
            .catch(error => {
                console.log("Error Deleting Wish List");
                console.log(error);
            })
    }

  render() {
      console.log(this.state.vacations)
    const allVacations = this.state.vacations.map((vacation, index) => {
        return <tr key={index}>
            <Vacation {...vacation} deleteVacation={this.deleteVacation}></Vacation>
        </tr>
    })
    return <div>
    <h1>Vacations</h1>
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Destination</th>
                    <th>Flights</th>
                    <th>Activities</th>
                </tr>
                {this.state.vacations.map(function(vacation){
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{vacation.destination}</Card.Title>
                        <Card.Text>
                            {vacation.destination}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                })}
                {allVacations}
            </tbody>
        </table>
    </div>
    <div>
            <VacationCreateForm addVacation={this.addVacation}></VacationCreateForm>
            

    </div>
</div>;
}
}



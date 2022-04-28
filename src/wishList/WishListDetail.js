import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Vacation from '../vacation/Vacation'
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';

export default function WishListDetail(props) {
    const { id } = useParams()
    const [wishlist, setWishList] = useState(null)
    const [vacations, setVacations] = useState([])


    let loadOneList = async () => {
        let res = await axios.get(`/wishList/detail?id=${id}`)
        console.log(res.data.wishList.vacation)
        setWishList(res.data)
    }


    let loadAllVac = async () => {
        let res = await axios.get("/vacation/index")
        setVacations(res.data)
        console.log(res.data)
    }

    let handleVacationAdd = (vacationID) => {
        console.log(vacationID)
        axios.post(`/wishList/addVac/${id}/${vacationID}`)
    }

    let handleVacationDelete = (vacationID) => {
        console.log(vacationID)
        axios.delete(`/wishList/deleteVac/${id}/${vacationID}`)
    }

    useEffect(() => {
        loadOneList()
        loadAllVac()
        
    }, [wishlist])

    const allVacations = vacations?.map((vacation, index) => {
        return <div key={index}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{vacation.destination}</Card.Title>
                    <Card.Text>
                        Flights: {vacation.flight}
                    </Card.Text>
                    <Button onClick={() => handleVacationAdd(vacation._id)} variant="primary">Add</Button>
                </Card.Body>
            </Card>

        </div>

    })

    // const loadedVac = wishlist.vacation?.map((vacation, index) => {
    //     return <div key={index}>
    //         <Card style={{ width: '18rem' }}>
    //             <Card.Body>
    //                 <Card.Title>{vacation.destination}</Card.Title>
    //                 <Card.Text>
    //                     Flights: {vacation.flight}
    //                 </Card.Text>
    //                 <Button onClick = {()=>handleVacationDelete(vacation._id)} variant="primary">Delete</Button>
    //             </Card.Body>
    //         </Card>

    //     </div>

    // })
    return (
        <>
            {wishlist &&
                <div>
                    <h1>{wishlist.wishList.name}</h1>
                    <div>
                        <p><b>Description:</b> {wishlist.wishList.description}</p>

                        {vacations &&
                            <div>
                                <h2>Vacations Added</h2> 
                                {wishlist.wishList.vacation.map((vacation, index) => { 
                                   return <div key={index}>
                                        
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{vacation.destination}</Card.Title>
                                                <Card.Text>
                                                    Flights: {vacation.flight}
                                                </Card.Text>
                                                <Button onClick={() => handleVacationDelete(vacation._id)} variant="primary">Delete</Button>
                                            </Card.Body>
                                        </Card>

                                    </div>

                                })
                                }</div>
                        }

                        <br />

                        {vacations &&
                            <div>
                                <h2>All Vacations</h2>
                                {allVacations}
                            </div>

                        }
                    </div>
                </div>
            }
        </>
    )
}


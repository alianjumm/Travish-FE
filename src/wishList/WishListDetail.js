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
        console.log(res.data)
        setWishList(res.data)
    }


    let loadAllVac = async () => {
        let res = await axios.get("/vacation/index")
        setVacations(res.data)
        console.log(res.data)
    }

    let handleVacationAdd = async (vacationID) => {
        await axios.post(`/wishList/addVac?wishListID=${id}?vacationID=${vacationID}`)
    }

    useEffect(() => {
        loadOneList()
        loadAllVac()
    }, [])

    const allVacations = vacations?.map((vacation, index) => {
        return <div key={index}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{vacation.destination}</Card.Title>
                    <Card.Text>
                        {vacation.flight}
                    </Card.Text>
                    <Button onClick = {()=>handleVacationAdd(vacation._id)} variant="primary">Add</Button>
                </Card.Body>
            </Card>

        </div>

    })
    return (
        <>
            {wishlist &&
                <div>
                    <h1>{wishlist.wishList.name}</h1>
                    <div>
                        <p><b>Description:</b> {wishlist.wishList.description}</p>

                        <div>
                            <h2>Vacations Added</h2>
                        </div>

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


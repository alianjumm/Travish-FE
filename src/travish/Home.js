import React, { Component } from 'react'
import { Navbar, Nav, Container, Card, Button, Carousel } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='headline'>Welcome to Travish</h1>
        <br />
        <div className='slideshow'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Bali.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>BALI</h3>
                <p>Add this to your bucketlist and plan it!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Swit.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>SWITZERLAND</h3>
                <p>Add this to your bucketlist and plan it!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/Singapore.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>SINGAPORE</h3>
                <p>Add this to your bucketlist and plan it!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

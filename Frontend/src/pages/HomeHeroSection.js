import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Carousel, Container, InputGroup, FormControl, Button } from 'react-bootstrap';

function HomeHeroSection() {
  
  return ( 
    <div className="hero-section">
      <Carousel>
      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1539298781177-895e382e795c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdpbnRlciUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
              <InputGroup className="mb-3">
                <FormControl placeholder="Search" aria-label="Search" />
                <Button variant="info">Search</Button>
              </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
              <InputGroup className="mb-3">
                <FormControl placeholder="Search" aria-label="Search" />
                <Button variant="info">Search</Button>
              </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1576109324778-3ec50ebdf7db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZsb3dlciUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
              <InputGroup className="mb-3">
                <FormControl placeholder="Search" aria-label="Search" />
                <Button variant="info">Search</Button>
              </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>
   
      <Carousel.Item>
          <div className="carousel-image">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" className="d-block w-100" alt="house1" />
            <div className="carousel-content">
              <h1>Welcome to Home Sweet Home: Connect and Explore with Home Exchanges</h1>
            </div>
          </div>
          <Carousel.Caption className="carousel-search">
            <Container className="d-flex justify-content-center align-items-center">
              <InputGroup className="mb-3">
                <FormControl placeholder="Search" aria-label="Search" />
                <Button variant="info">Search</Button>
              </InputGroup>
            </Container>
          </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

    </div>
   );
}

export default HomeHeroSection;
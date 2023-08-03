import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (

       <Navbar bg="light" Style={{width:"100%", marginBotton:"10%"}}>
      <Container> 
        <Navbar.Brand href="#home">Contact</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  Style={{textDecoration:"none" , marginRight:"15px"}} to="/">Home</Link>
            <Link Style={{textDecoration:"none" , marginRight:"15px"}} to="/add">Add</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar

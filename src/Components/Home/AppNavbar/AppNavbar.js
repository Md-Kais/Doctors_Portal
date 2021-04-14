import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './AppNavbar.css'
const AppNavbar = () => {
    return (

        <Navbar expand="lg" >
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav " className="ml-auto" />
            <Navbar.Collapse id="basic-navbar-nav ">


                <Nav className="ml-auto ">
                    <Nav.Link className='ml-5 navText text-secondary' href="#home" >Home</Nav.Link>
                    <Nav.Link className='ml-5 navText text-secondary' href="#about">About</Nav.Link>
                    <Nav.Link className='ml-5 navText text-secondary' href="#dentalServices">Dental Services</Nav.Link>
                    <Nav.Link className='ml-5 navText textPrimary' href="#reviews">Reviews</Nav.Link>
                    <Nav.Link className='ml-5 navText textPrimary' href="blog">Blog</Nav.Link>
                    <Nav.Link className='ml-5 navText textPrimary' href="contact">Contact</Nav.Link>

                </Nav>


            </Navbar.Collapse>
        </Navbar>

    );
};

export default AppNavbar;

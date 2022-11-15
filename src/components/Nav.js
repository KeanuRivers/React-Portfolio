//Needed Imports:
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//Const Arrow function for navbar:
const NavBar = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" responsive="true">
            <NavLink to="/"><Navbar.Brand><span className="navbar-title">Keanu Rivers</span></Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink to="/" exact className="nav-link">About</NavLink>
                    <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

//Required Export:
export default NavBar;
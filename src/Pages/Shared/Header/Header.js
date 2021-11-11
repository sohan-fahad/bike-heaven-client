import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, LogOut } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" className="logo img-fluid" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="global-text" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end nav-a">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#review">Review</Nav.Link>
                    <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>

                    {
                        user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    }
                    
                    {
                        user.email ? <Nav.Link as={Link} to="/login" onClick={LogOut}>LogOut</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
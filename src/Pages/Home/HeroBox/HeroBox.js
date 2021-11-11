import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './HeroBox.css'

const HeroBox = () => {
    return (
        <div className="hero-box">
            <Container>
                <div className="hero-content">
                    <div>
                        <h1>BIKE HEAVEN</h1>
                        <h4>GET YOUR DREAM BIKE</h4>
                        <NavLink as={Link} to="/explore">
                            <button type="button" className="global-btn px-4 py-2 mt-4 fs-4">EXPLORE</button>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroBox;
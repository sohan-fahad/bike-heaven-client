import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import paymentPatner from '../../../images/payment.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer text-start mt-5">
            <Container>
                <Row>
                    <Col md={4} sm={6} xs={12}>
                        <h2 className="mb-3 global-text">Get to Know us</h2>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>Terms and Condition</li>
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <h2 className="mb-4 global-text">Contact Us</h2>
                        <p><i className="fas fa-phone text-light"></i> 01234255365</p>
                        <p><i className="fas fa-at text-light"></i> support@admin.com</p>
                        <p><i className="fas fa-map-marker-alt text-light"></i> 422/1, Goroyar Road, Mirpur, Dhaka-1212</p>
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <h2 className="mb-2 global-text text-center">Payment Patners</h2>
                        <img src={paymentPatner} alt="" className="img-fluid w-100" />
                    </Col>
                </Row>
                <p className="text-center mt-4 global-text">© 2021 || All Rights Reserved by Bike Heaven</p>
            </Container>
        </div>
    );
};

export default Footer;
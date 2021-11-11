import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    const contactImg = "https://www.pngall.com/wp-content/uploads/6/Rider-PNG-Image-HD.png"
    return (
        <div className="mt-5 contact" id="contact">
            <Container>
                <h1 className="global-text fw-bold mb-3 px-3 fs-1 text-center">CONTACT US</h1>
                <p className="px-1 mb-4 text-center">If you have any question you can send us your message by fill up the forms.  We will be very happy to hear from you. Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                <Row>
                    <Col md={6} sm={12} className="d-flex justify-content-center align-items-center">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <textarea name="" placeholder="Message"></textarea>
                            <button className="global-btn px-5 py-2 mt-3">SUBMIT</button>
                        </form>
                    </Col>
                    <Col md={6} sm={12} className="d-flex justify-content-center">
                        <img src={contactImg} alt="" className="img-fluid w-75" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
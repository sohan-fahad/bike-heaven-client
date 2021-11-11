import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <Container className="FAQ mt-5">
                <h1 className="global-text fw-bold px-1 mb-3 text-center">F.A.Q</h1>
                <Row md={1} className="d-flex align-items-center">
                    
                    <Col>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Do you offer a test ride service?</Accordion.Header>
                                <Accordion.Body>
                                A bike might look fantastic on the screen of a computer, and it might still look fantastic when you’ve seen it standing on the shop floor in a store. It might have all the components you’re after, right down to the correct width tyres.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do you offer a guarantee?</Accordion.Header>
                                <Accordion.Body>
                                Not all bike shops offer this one, we do understand why, and we wouldn’t make it a deal breaker. However, some major retailers such as Evans Cycles, and a few smaller shops do let you bring a bike back (in the form of a swap) after you’ve ridden it if it’s not right for you.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Do you offer a fitting service? With who?</Accordion.Header>
                                <Accordion.Body>
                                Proper bike fit is essential to a comfortable ride. You can have the most amazing, feather light bike in the world, but if your arms are maxing out trying to reach the bars and your legs are scrunched up like a frog you’re not going to be riding it very far or very fast.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Do you offer any servicing?</Accordion.Header>
                                <Accordion.Body>
                                Firstly – proximity matters here. If you’re buying a bike from a shop 200 miles away, you probably won’t want to return to have it serviced. You’re more likely to get good deals if you do get your bike serviced at the shop where you bought it, as you’ll be known as a loyal customer – so though it’s not always possible it does make sense to keep it local if you can.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Can you give me a deal?</Accordion.Header>
                                <Accordion.Body>
                                We’re not suggesting you ask your open-mouthed LBS owner for a 50 per cent discount. This is a small industry and we all have to survive! However,  local bike shops often offer discounts (think 10 per cent) for cycling club members, or might throw in a helmet or some shoes to sweeten the deal if you ask nicely.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FAQ;
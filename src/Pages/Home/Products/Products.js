import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://secret-ocean-30546.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const featuresProducts = products.slice(0, 6)

    return (
        <Container className="mt-5" id="products">
            <h1 className="mt-3 mb-4 fw-bold text-center">Choose Your <span className="global-text">Dream</span> Bike</h1>
            <Row md={3} sm={2} xs={1} className="text-center">
                {featuresProducts.map(pd => <Col className="mb-4">
                    <Card style={{ border: "none" }} className="shadow-sm">
                        <Card.Img className="p-3" variant="top" src={pd.productImg} />
                        <Card.Body>
                            <Card.Title className="global-text fw-bold fs-4 ">{pd.productName}</Card.Title>
                            <h5>Price: {pd.price}<span>৳&nbsp;</span></h5>
                            <Card.Text className="px-2">
                                {pd.description.slice(0, 60)}
                            </Card.Text>
                            <NavLink to={`/details/${pd._id}`}>
                                <Button className="global-btn px-5 py-2">BUY NOW</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </Container>
    );
};

export default Products;
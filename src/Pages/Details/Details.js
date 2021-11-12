import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import './Details.css'

const Details = () => {
    const { id } = useParams()
    const history = useHistory()
    const { user } = useAuth()

    const nameRef = useRef()
    const priceRef = useRef()
    
    // const orderInfo = 
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://secret-ocean-30546.herokuapp.com/details/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [user.email])
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.status = "PENDING"
        data.price = nameRef.current.value
        data.productName = priceRef.current.value
        fetch("https://secret-ocean-30546.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Congress!',
                        'Order has been placed.'
                    )
                    console.log(data);
                    history.push('/dashboard')
                    reset()
                }
            })
    }
    return (
        <Container className="my-5">
            <Row md={2} sm={1} xs={1}>
                <Col>
                    <div>
                        <img src={product.productImg} alt="" className="img-fluid" />
                    </div>
                    <div>
                        <h1 className="global-text fw-bold mt-4">{product.productName}</h1>
                        <h5 className="">Price: {product.price}৳&nbsp;</h5>
                        <p className="text-justify">{product.description}</p>
                    </div>
                </Col>
                <Col className="order-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='global-text fw-bold mb-4 text-center'>PLACE YOUR ORDER NOW!</h3>
                        <input {...register("name")} value={user?.displayName} required />
                        <input {...register("email")} type="email" value={user?.email} required />
                        <input {...register("productName")} ref={nameRef} value={product?.productName} required />
                        <input {...register("number")} type="number" placeholder="Enter Phone number" required />
                        <input {...register("address")} type="text" placeholder="Enter Address" required />
                        <input {...register("price")} ref={priceRef} type="number" value={product?.price} />
                        <input type="submit" className="global-btn" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import vector from '../../../images/loginVector.jpg'
import useAuth from '../../../Hooks/useAuth'
import './Registration.css'
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';

const Registration = () => {
    const {user, handleRegister, singingUsingGoole} = useAuth()
    console.log(user)

    const location = useLocation()
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleRegister(data.email , data.password, data.name, history, location)
    };
    return (
        <Container className='reg-form'>
            <Row md={2} xs={1}>
                <Col>
                    <div className="form-container">
                        <h4 className="global-text mb-4">Registration</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name")} placeholder="Name..." required />
                            <input {...register("email")} type="email" placeholder="email..." required />
                            <input {...register("password")} placeholder="Password..." required />
                            <input className="global-btn border-0" type="submit" value="Registartion"/>
                        </form>
                        <Link  className="my-3" to='/login'>Already have an account?</Link>
                        <button className="btn-google py-2" onClick={()=>singingUsingGoole(history, location)}><i class="fab fa-google"></i> Singin Using Google</button>
                    </div>
                </Col>
                <Col>
                    <img src={vector} alt="" className="img-fluid w-100" />
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;
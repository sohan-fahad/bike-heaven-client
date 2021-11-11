import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import vector from '../../../images/loginVector.jpg'
import './Login.css'

const Registration = () => {
    const { hanleLogin, singingUsingGoole, handleRegister } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        hanleLogin(data.email, data.password, history, location)
    };
    const onSubmit1 = data => {
        handleRegister(data.email , data.password, data.name, history, location)
    };
    const [controler, setController] = useState(true)
    return (
        <Container className='login-form'>
            {
                controler ? <Row md={2} xs={1}>
                    <Col>
                        <img src={vector} alt="" className="img-fluid w-100" />
                    </Col>
                    <Col>
                        <div className="form-container p-4">
                            <h4 className="global-text my-4">Login</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("email")} type="email" placeholder="email..." required />
                                <input {...register("password")} type="password" placeholder="Password..." required />
                                <input className="global-btn border-0" type="submit" value="Login" />
                            </form>
                            <button style={{backgroundColor: "#fff", border:"none", color:"blue"}} className="my-3" onClick={() => setController(false)} >Create an account!</button>
                            <button className="btn-google py-2 mb-4" onClick={() => singingUsingGoole(history, location)}><i class="fab fa-google"></i> Singin Using Google</button>
                        </div>
                    </Col>
                </Row> : <Row md={2} xs={1}>
                    <Col>
                        <div className="form-container">
                            <h4 className="global-text mb-4 mt-3">Registration</h4>
                            <form onSubmit={handleSubmit(onSubmit1)}>
                                <input {...register("name")} placeholder="Name..." required />
                                <input {...register("email")} type="email" placeholder="email..." required />
                                <input {...register("password")} type="password" placeholder="Password..." required />
                                <input className="global-btn border-0" type="submit" value="Registartion" />
                            </form>
                            <button className="my-3" style={{backgroundColor: "#fff", border:"none", color:"blue"}} onClick={() => setController(true)}>Already have an account?</button>
                            <button className="btn-google py-2 mb-4" onClick={() => singingUsingGoole(history, location)}><i class="fab fa-google"></i> Singin Using Google</button>
                        </div>
                    </Col>
                    <Col>
                        <img src={vector} alt="" className="img-fluid w-100" />
                    </Col>
                </Row>

            }
        </Container>
    );
};

export default Registration;
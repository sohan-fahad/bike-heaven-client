import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="status-code global-text fw-bold">404</h1>
            <h2 className="fw-bold ">OOPS! PAGE NOT FOUND.</h2>
            <h5 className="py-2">Sorry! The page you are looking for doesn't exist.</h5>
            <h5 className="py-2">If you are think something is broken, please let us inform.</h5>
            <div>
                <Link to="/"><Button className="global-btn mt-3">Go Back</Button></Link>
            </div>
        </div>
    );
};

export default NotFound;
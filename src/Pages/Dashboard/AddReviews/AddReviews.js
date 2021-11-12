import React from 'react';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './AddReviews.css'
import useAuth from '../../../Hooks/useAuth';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user, setController, controller} = useAuth()
    const onSubmit = data => {
        fetch('https://secret-ocean-30546.herokuapp.com/reviews', {
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
                        'Review Add Successfuly',
                        'Thanks For Your Feedback'
                    )
                    reset()
                    setController(!controller)
                }
            })
    };
    return (
        <div className="add-reviews">
            <Container>
                <h1 className="fw-bold my-5 text-center">Share Your <span className="global-text">Experience</span> With Us</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} value={user.displayName} required />
                    <input {...register("email")} type="email" value={user.email} required />
                    <textarea {...register("feedback")} placeholder="Write Your Experience..." required />
                    <select {...register("rating")} required>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <input type="submit" className="global-btn" />
                </form>
            </Container>
        </div>
    );
};

export default AddReviews;
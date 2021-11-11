import React, { useEffect, useState } from 'react';
import './Reviews.css'
import reviewImg from '../../../images/reviewsImg.png'
import ReactStars from "react-rating-stars-component";
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    
    const { user } = useAuth()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://secret-ocean-30546.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email])
    
    
    return (
        
        <Container id='review'>
            <div class="swiper mySwiper my5">
                <div class="swiper-wrapper">
                    {
                        reviews.map(pd => <div class="swiper-slide review-slider">
                            <div className="d-flex justify-content-center"><img src={reviewImg} alt="" className="img-fluid" /></div>
                            <h5 className="text-center">{pd.name}</h5>
                            <p className="text-center">{pd.feedback.slice(0, 100)}</p>
                            <div className="w-50 mx-auto">
                                <ReactStars {...{
                                    size: 30,
                                    value: pd.rating,
                                    edit: false,
                                    activeColor: "#e31e25",
                                }} />
                            </div>
                        </div>)
                    }
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </Container>
    );
};

export default Reviews;
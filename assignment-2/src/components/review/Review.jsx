import React from 'react';
import Like from '../like/Like';
import './review.css';

const Review = (props) => {
    return (
        <section className="review" key={props.review.id}>
        <div className="reviewer" >{props.review.user}</div>
        <div className="review-title" >{props.review.title} </div>
        <div className="review-date" >{props.review.date}</div>
        <blockquote className="review-text" >{props.review.text}</blockquote>
        <Like likes={props.review.likes} addLike={props.addLike} id={props.review.id} />
        </section>
    )
}
export default Review;
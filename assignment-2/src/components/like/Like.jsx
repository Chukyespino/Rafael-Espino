import React from 'react';
import './like.css';

const Like = ({ likes, id, addLike }) => {
    return(
        <div className="review-likes">
        <button className="like-button" onClick={() => addLike(id, likes + 1 )}>Like!</button>
        {`${likes} people likes this review.`}
        </div>
    );
}

export default Like;
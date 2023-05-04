import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import './Card.css';

const Card = ({course}) => {

    const [clicked, setClicked] = useState(true);

    const fcLikeHandler = () => {
        if(clicked) {
            toast.success("Liked Successfully");
        } else {
            toast.warning("Like Removed");
        }
        setClicked(!clicked);
    }

    return (
        <div className="topDiv">
            <div>
                <img src={course.image.url} className='image'></img>
                <div className="fcLike">
                    <button className="fcLikeButton" onClick={fcLikeHandler}>
                        {!clicked ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>}
                    </button>
                </div>
            </div>

            <div className="titleDiv">
                <p className="title">{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
        
    );
}

export default Card;
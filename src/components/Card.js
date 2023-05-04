import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import './Card.css';

const Card = ({course}) => {

    const [clicked, setClicked] = useState(true);
    const [readMore, setReadMore] = useState(true);
    const description = readMore ? course.description.substr(0, 200) + '...' : course.description;

    const fcLikeHandler = () => {
        if(clicked) {
            toast.success("Liked Successfully");
        } else {
            toast.warning("Like Removed");
        }
        setClicked(!clicked);
    }

    const readMoreHandler = () => {
        setReadMore(!readMore);
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
                <p>{ description } <span onClick={readMoreHandler} className='readMoreSpan'>{readMore ? "Read More" : "Show Less"}</span> </p>
            </div>
        </div>
        
    );
}

export default Card;
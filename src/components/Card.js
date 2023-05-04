import React from "react";
import { FcLike } from "react-icons/fc";
import './Card.css';

const Card = ({course}) => {
    return (
        <div className="topDiv">
            <div>
                <img src={course.image.url} className='image'></img>
                <div>
                    <button>
                        <FcLike fontSize="1.75rem"/>
                    </button>
                </div>
            </div>

            <div className="titleDiv">
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
        
    );
}

export default Card;
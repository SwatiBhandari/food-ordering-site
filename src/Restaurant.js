import { Link} from 'react-router-dom';
import React from "react";
import './Restaurant.css'

function Restaurant({title,image,location,rating,path}){
    return (
        <div className="Restaurant">
            <div className="Restaurant__info">
                <p>{title}</p>
                <p className="Restaurant__location">
                    <strong>{location}</strong>
                </p>
                <div className="Restaurant__rating">
                    {Array(rating).fill().map((_,i) => (<p><span role="img" aria-label="emoji">⭐</span></p>))}
                </div>
                <div >
                    <img className="image" src={image} alt="" />
                </div>
                <div>
                    <Link className='link' to={path}>
                    <button align="center" className="button" > Quick View </button>
                    </Link>
                </div>
            </div>

        </div>    
        )
}

export default Restaurant
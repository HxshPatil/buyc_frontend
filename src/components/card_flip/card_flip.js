import React from 'react';
import './card.css';

function Card({name, body}){
    return(
        <div className='card-container'>
            <div className='wrapper'>
                <div className="card-container-front">
                    <div className='image-container'>
                        <img src={"https://www.hdwallpapers.in/download/yellow_car_dark_background_hd_yellow-HD.jpg"} alt='car-image' />
                    </div>
                    <div className='card-title'>
                        <h3>{name}</h3>
                    </div>
                    <div className='card-body'>
                        <p>{body}</p>
                    </div>
                </div>
                <div className="card-container-back">
                    hello
                </div>
            </div>
        </div>
    );
}

export default Card;
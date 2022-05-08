import React from "react";
import '../index.css'
// import card1 from '../images/katie-zaferes.png'
import star from '../images/star.png'


export default function Card(props){
    return(
        <section className="card">
            {props.openSpots === 0 && <div className="card__badge">SOLD OUT</div>}
            <img src={`./images/${props.img}`} className="card__img"/>
            <div className="card__stats">
                <img src={star} className="card__star"/>
                <span>{props.rating} </span>
                <span className="grey">({props.reviews}) •</span>
                <span className="grey">{props.location}</span>
            </div>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__price"><span className="bold">From ${props.price}</span> / person</p>
            
        </section>
    )
}
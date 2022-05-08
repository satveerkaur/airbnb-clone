import React from "react";
import '../index.css'
// import card1 from '../images/katie-zaferes.png'
import star from '../images/star.png'


export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <section className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img src={`./images/${props.coverImg}`} className="card__img"/>
            <div className="card__stats">
                <img src={star} className="card__star"/>
                <span>{props.stats.rating} </span>
                <span className="grey">({props.stats.reviewCount}) •</span>
                <span className="grey">{props.location}</span>
            </div>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__price"><span className="bold">From ${props.price}</span> / person</p>
            
        </section>


    )
}
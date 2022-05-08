import React from "react";
import '../index.css'
// import card1 from '../images/katie-zaferes.png'
import star from '../images/star.png'


export default function Card(props){
    return(
        <section className="card1">
            <img src={props.img} className="card1__img"/>
            <div>
                <img src={star} className="star"/>
                <span>{props.rating} </span>
                <span className="grey">({props.reviews}) •</span>
                <span className="grey">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
            
        </section>
    )
}
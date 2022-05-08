import React from "react";
import photogrid from '../images/photo-grid.png'
import '../index.css'

export default function Hero(){
    return(

        <section className="hero">
            <div className="hero__grid">
                <img src={photogrid} alt="" className="photogrid"/>
            </div>
            <div className="hero__content">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
        
    )
}
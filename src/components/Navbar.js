import React from "react";
import logo from '../images/airbnb-logo.png'
import '../index.css'

export default function Navbar(){
    return(
        <nav>
            <img src={logo} className="logo"/>
        </nav>
    )
}
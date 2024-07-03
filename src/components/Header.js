import { useState } from "react";

import logo from "../assets/logo.png"

import {Link} from "react-router-dom"


export const Title = () => (
    <a href = "/">
        <img
            className = "logo"
            alt = "logo"
            src = {logo}
        />
    </a>
);

//Anchor tag causes the whole page to reload .

//SPA - Single Page Application

//Two types of Routing ?
//----------------------
//1. Client Side Routing 
//2. Server Side Routing

//We'll use client side routing .

export const Header = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false) ;

    return (
        <div className = "header">
            <Title/>
            
            <div className = "nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        {
            isLoggedIn ? 
                <button onClick = {() => setIsLoggedIn(false)}>Logout</button> 
                : 
                <button onClick = {() => setIsLoggedIn(true)}>Login</button> 
        }
                
        </div>
    )
}


export default Header ;

//While exporting by default , we can change the name of function component in the file where we import it .
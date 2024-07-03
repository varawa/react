import { useState } from "react";

import logo from "../assets/logo.png"


export const Title = () => (
    <a href = "/">
        <img
            className = "logo"
            alt = "logo"
            src = {logo}
        />
    </a>
);



export const Header = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false) ;

    return (
        <div className = "header">
            <Title/>
            
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
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
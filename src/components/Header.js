import { useState } from "react";

export const Title = () => (
    <a href = "/">
        <img
            className = "logo"
            alt = "logo"
            src = "https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
        />
    </a>
);



export const Header = () => {

    return (
        <div className = "header">
            <Title/>
            <h1>
                Food Villa
            </h1>
            
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


//export default Title ;

//While exporting by default , we can change the name of function component in the file where we import it .
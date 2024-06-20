import React from "react" ;
import ReactDOM from "react-dom/client" ;

/**
 * Header
 *  -Logo
 *  -NavBar
 * Body
 *  -SearchBar
 *  -RestaurantList
 *      -RestaurantCard
 *      -Name
 *      -Rating
 *      -Cuisines
 * Footer
 *  -Links
 *  -Copyright
 */


const Title = () => (
    <img className="logo" alt= "logo" src = "https://www.uidownload.com/files/909/69/136/organic-food-restaurant-logo-template-free-vector.jpg"></img>
)

//COMPOSING COMPONENTS

const HeaderComponent = () => {
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
        </div>
    )
}



const AppLayout = ()=>{
    return {} ;
}

const root = ReactDOM.createRoot(document.getElementById("root")) ;

root.render(<HeaderComponent/>) ;
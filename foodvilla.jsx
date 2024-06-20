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
    <a href="/">
        <img 
            className="logo" 
            alt= "logo" 
            src = "https://www.uidownload.com/files/909/69/136/organic-food-restaurant-logo-template-free-vector.jpg" 
        />
    </a>
)

//COMPOSING COMPONENTS

const Header = () => {
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

const Body = () =>{
    return(
        <h4>Body</h4>
    )
} 

const Footer = () =>{
    return(
        <h4>Footer</h4>
    )
}


const AppLayout = ()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    ) ;
}

//React.Fragment
//Its a component exported by React .
//Its like an empty tag .
//Can be written as <> </>

const root = ReactDOM.createRoot(document.getElementById("root")) ;

root.render(<AppLayout/>) ;
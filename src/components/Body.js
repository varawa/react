
import { RestaurantCard } from "./RestaurantCard"

import { useState } from "react";

import { useEffect } from "react";

import Shimmer from "./shimmer";


function filterData(search , restro){
    
    var filtered = restro.filter((restaurant)=>
        restaurant?.info?.name?.toLowerCase()?.includes(search.toLowerCase())
    ) ;
    
    return filtered ;
}

//Two ways to integrate APIs :
    //1. As soon as the user reloads(lif 200ms) the page call API(if 300ms) .
    //The page will take 500 ms to render .

    //2. As soon as user loads the page , 
    //show user something on the page then call API the update UI .
    //In most cases a BASIC SKELETON is shown .(Shimmer Effect)


const Body = () =>{

    console.log("re render") ;
    //React will only update searchText but it will quickly re-render the whole header component .

    //Search text is a local state variable .
    const [searchText , setSearchText] = useState("") ;       //To create state variable .
    
    const[allRestaurants , setAllRestaurants] = useState([]) ;
    const[filteredRestaurants , setFilteredRestaurants] = useState([]) ;

    useEffect(() =>{
        //API call              (CORS error ?)
        getRestaurants() ;
        //Handling errors ?
    
    } , []) ;
    
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;
        const json = await data.json() ;
        console.log(json) ;

        //Optional chaining .

        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
    }

    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const placeholders = [
        'Search...',
        "what's on your mind ?",
        'Search for popular restaurants...',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholders.length);
        }, 3000); // Change placeholder every 3 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, [placeholderIndex]);

    //(Early Return)
    if(!allRestaurants) return null ;

    
    return allRestaurants.length === 0 ? <Shimmer/> : (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder={placeholders[placeholderIndex]}
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value) ;
                    }}
                />
            
                <button 
                    className="search-btn" 
                    onClick={()=>{
                        const filteredData = filterData(searchText , allRestaurants) ;
                        
                        setFilteredRestaurants(filteredData) ;
                    }}
                    >
                    Search 
                 </button>
            </div>

            <div className="restaurantList">
                {
                    //Map vs for loop.

                    //Why can't we use index as a key?
                    //a key is the only thing React uses to identify DOM elements. 
                    //What happens if you push an item to the list or remove something in the middle? 
                    //If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.
                    filteredRestaurants.length === 0 ? <h1>No matches found !</h1> :
                    filteredRestaurants.map(restaurant =>{
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.name}/>
                    })
                }
            </div>
      
        </>
    );
} ;

export default Body ;

//  Optional Chaining ?.

//  props = properties .
//  props are passed as arguments in the functional component on their own .

//  JSX curly braces do support embedding JavaScript expressions, 
//  but they do not support JavaScript statements like for loops directly. 
//  JavaScript expressions return a value, whereas statements perform an action. Here’s the difference:

//  Expressions are things like 2 + 2, myArray.map(...), or restaurant.name.
//  Statements are things like if conditions, for loops, and while loops.


//  ONE WAY DATA-BINDING

//  React uses one-way data binding .


//  What is State ?
//  What is Hook ? -functions
//  What is useState ?

//useState is a hook .

//[searchText , setSearchText] destructured the array returned by useState .
//React doesnt have "Two Way Data Binding" .

//useState() hooks are used to create local state variables in react .

//Why do we need state variables?

//React has one way binding, also react does not keep track of changes made in local variables ,
//but it keeps track of state variables .

//Two Parameters of useEffect : 1. callback function 2. Dependency Array .
//Dependency array decides on what event will useEffect be called .(Called only once when dependency array is empty .)
//useEffect is called after first render when dependency array is EMPTY .
//useEffect is called after every render when dependency array is no passed as a parameter .
//When dependency array is not empty then its called after every re-render(only those re-renders where the concerned dependency is changed) .

//The call-back function inside useEffect is not called immediately but called only when useEffect wants it to be called .

//Conditional Rendering .
//If(restaurant === empty) => load shimmer UI
//if it has data then load actual UI .


//MicroServices ?
//We have small projects for every small component (UI , API , Notifications , Logs , Authentication) .
//And every component (small project) can run on different ports and can have different databases that they rely on .

//How these are connected ?
//All the ports are mapped to eachother and in majority cases have the same domain name .

//Seperation of concern (SOC) .

//Monolith ?

//Why is CDN a good way to host images ?
    


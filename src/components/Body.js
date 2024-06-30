import { restaurantList } from "../config"
  
import { RestaurantCard } from "./RestaurantCard"

import { useState } from "react";


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


const Body = () =>{


    //Search text is a local state variable .
    const [searchText , setSearchText] = useState() ;       //To create state variable .
 
    //[searchText , setSearchText] destructured the array returned by useState .
    //React doesnt have "Two Way Data Binding" .

    //useState() hooks are used to create local state variables in react .

    return(
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value) ;
                        console.log(searchText) ;
                    }}
                />
                <button className="search-btn">Search - {searchText}</button>

            </div>

            <div className="restaurantList">
                {
                    //Map vs for loop.

                    //Why can't we use index as a key?
                    //a key is the only thing React uses to identify DOM elements. 
                    //What happens if you push an item to the list or remove something in the middle? 
                    //If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.
                    restaurantList.map(restaurant =>{
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.name}/>
                    })
                }
            </div>
      
        </>
    )
} 

export default Body ;
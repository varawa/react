import { restaurantList } from "../config"
  
import { RestaurantCard } from "./RestaurantCard"
//Optional Chaining ?.



//props = properties .
//props are passed as arguments in the functional component on their own .

//JSX curly braces do support embedding JavaScript expressions, 
//but they do not support JavaScript statements like for loops directly. 
//JavaScript expressions return a value, whereas statements perform an action. Here’s the difference:

//Expressions are things like 2 + 2, myArray.map(...), or restaurant.name.
//Statements are things like if conditions, for loops, and while loops.


//ONE WAY DATA-BINDING

//React uses one-way data binding .


const Body = () =>{
    let searchText = "KFC" ;


    return(
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e) => console.log(e.target.value)}
                />
                <button className="search-btn">Search</button>

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
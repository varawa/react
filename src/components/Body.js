import { IMG_CDN_URL } from "../../config"

import { restaurantList } from "../../config"
  
//Optional Chaining ?.

const RestaurantCard = ({name , cuisines , cloudinaryImageId ,deliveryTime}) => { 
    return(
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h3>{deliveryTime + "min"}</h3>
        </div>
    )
}

//props = properties .
//props are passed as arguments in the functional component on their own .

//JSX curly braces do support embedding JavaScript expressions, 
//but they do not support JavaScript statements like for loops directly. 
//JavaScript expressions return a value, whereas statements perform an action. Here’s the difference:

//Expressions are things like 2 + 2, myArray.map(...), or restaurant.name.
//Statements are things like if conditions, for loops, and while loops.



const Body = () =>{
    return(
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
    )
} 

export default Body ;
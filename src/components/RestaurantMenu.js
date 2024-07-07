import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const params = useParams() ;
    const {id} = params ;

    const [restaurant , setRestaurant] = useState([]) ;

    useEffect(()=>{
        getRestaurantInfo() ;
    } , []);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=10575") ;
        const json = await data.json() ;
        console.log(json) ;
    }

    return (
        <div>
            <h1>{restaurant} </h1>
        </div>
    );
};

export default RestaurantMenu ;
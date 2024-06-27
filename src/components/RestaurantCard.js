import { IMG_CDN_URL } from "../config"

export const RestaurantCard = ({name , cuisines , cloudinaryImageId ,deliveryTime}) => { 
    return(
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h3>{deliveryTime + "min"}</h3>
        </div>
    )
}
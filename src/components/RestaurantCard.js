import { IMG_CDN_URL } from "../config"

export const RestaurantCard = ({name , cuisines , cloudinaryImageId ,sla , costForTwo , avgRating}) => { 
    return(
        <div className="card">
            <div className="imgBox">
                <img src={IMG_CDN_URL + cloudinaryImageId} />
            </div>
            <div className="head">
                <div className="name">
                    {name}
                </div>
                <div className="rating">
                <svg  className="star" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="star"><polygon fill="#ffd759" points="102.6 494.1 137 320.1 6 200.5 182.1 179.5 255.3 17.9 329.7 178.9 506 198.6 375.9 319.2 411.6 492.9 256.8 406.4"></polygon><polygon fill="#fabd3b" points="256 256 6 200.5 137 320.1"></polygon><polygon fill="#fabd3b" points="256 256 102.6 494.1 256.8 406.4 411.6 492.9"></polygon><polygon fill="#fabd3b" points="256 256 506 198.6 375.9 319.2"></polygon><polygon fill="#fabd3b" points="255.3 17.9 256 256 329.7 178.9"></polygon></svg>
                <div className="ratingNum">
                    {avgRating}
                </div>
                </div>
                    
            </div>
            <div className="line2">
                <div className="cuisine">
                    {cuisines.join(', ')}
                </div>
                <div className="cost">
                    {costForTwo}
                </div>
            </div>
            <div className="time">
                    {sla.deliveryTime + "min"}
            </div>
            
        </div>
    )
}
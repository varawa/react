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
                <img className="star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAX9JREFUSEvFlkFywiAUht8bT8BCHFfVmyQ3qSfRnqTepLlJ05UjLjgB0iEJlaTACygTZjJmEfn44X8/D2GhgQtxIRsshXg3i2acn3MWnwWWt1sFWn91QMSarddNKjwPLISBVgOsYZzXxcEjtZaWoTpZsRTiEwC683XGmXF+SFGdA9YeQAtK1Wy7befCk8Dyej0B4jEweZLqNLAQPrV2HS3jfJ+luDPO/d67FfFtmGQHAPah5rVbbX77d61/ALF7d2v+T/EQCMY45Ybj/gfYDYVSaKX21oCjMybM89xyJrX+z1xFttwTMF5XvxDeAuLBl+XBcnoBPBoq0Tp+Ak5eHGSAyHhohAxHplgpxWSKlQKTDQIF9l2B8+pZ6w+22ZxCH1Pg7yGn58HGX0UNRoFDt1EDSvUX/2pldsW2QS46es7pdezZwmDURlqiGHh6vp3KUJchL5edR32wrGLgRydJGMXd34n6DHCvoAKlmpReyixiUF/Fmn0yuXLsPOc/i4F/AQA9uh/3ksXxAAAAAElFTkSuQmCC"/>
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
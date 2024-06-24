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

//Config Driven UI (Backend and APIs controls what the website shows on different occassions/places etc. )


const restaurantList = [
  {
      "info": {
          "id": "368179",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Garh Road",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 4.2,
          "parentId": "721",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 59,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "slaString": "55-60 mins",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-22 01:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-garh-road-shastri-nagar-meerut-368179",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "220119",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "qmax6qmqmeo9ofs46v47",
          "locality": "Block I",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4,
          "parentId": "4961",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 6,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "6.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-21 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-block-i-shastri-nagar-meerut-220119",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "307802",
          "name": "Barbeque Nation",
          "cloudinaryImageId": "gq6x74aptuivntuojsyn",
          "locality": "Panchsheel Colony",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "North Indian",
              "Barbecue",
              "Biryani",
              "Kebabs",
              "Mughlai",
              "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "2438",
          "avgRatingString": "4.1",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 58,
              "lastMileTravel": 8.2,
              "serviceability": "SERVICEABLE",
              "slaString": "55-60 mins",
              "lastMileTravelString": "8.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-22 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/barbeque-nation-panchsheel-colony-shastri-nagar-meerut-307802",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "855339",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "ecb050815f07f56bdb5c2189b3cd4fd0",
          "locality": "Delhi BYPASS Road",
          "areaName": "The Mars Resorts",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream",
              "Beverages"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "2233",
          "avgRatingString": "4.7",
          "totalRatingsString": "8",
          "sla": {
              "deliveryTime": 64,
              "lastMileTravel": 11.7,
              "serviceability": "SERVICEABLE",
              "slaString": "60-65 mins",
              "lastMileTravelString": "11.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-21 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-delhi-bypass-road-the-mars-resorts-meerut-855339",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "96483",
          "name": "Pinki Chole Bhandar",
          "cloudinaryImageId": "uyyiawn7tihdhfaf6lqm",
          "locality": "Boundary Road",
          "areaName": "Lal Kurti",
          "costForTwo": "₹229 for two",
          "cuisines": [
              "Indian",
              "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "15583",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 10.6,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "10.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-21 21:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/pinki-chole-bhandar-boundary-road-lal-kurti-meerut-96483",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "490851",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
          "locality": "PVS Mall",
          "areaName": "Shastri Nagar",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "6249",
          "avgRatingString": "4.7",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "6.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-21 23:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-pvs-mall-shastri-nagar-meerut-490851",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "785197",
          "name": "Theobroma",
          "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
          "locality": "ZONE- 8",
          "areaName": "GARH ROAD",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Bakery",
              "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "1040",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 49,
              "lastMileTravel": 8.2,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "8.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-22 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/theobroma-zone-8-garh-road-meerut-785197",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
      "info": {
          "id": "417514",
          "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/15307d46-565e-4f2a-a45b-982edc85c15f_417514.JPG",
          "locality": "NEAR KOTWAL",
          "areaName": "SWAMI PARA",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "582",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 52,
              "lastMileTravel": 8.6,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "8.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-06-21 22:15:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
          "context": "seo-data-fd109f59-7959-4128-aaf2-48eb3b85db9d"
      },
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-near-kotwal-swami-para-meerut-417514",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

//Optional Chaining ?.

const RestaurantCard = ({name , cuisines , cloudinaryImageId ,deliveryTime}) => { 
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} />
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

//Virtual DOM

//A represantation of DOM with us is virtual DOM .

//Need
//We need virtual DOM for reconciliation .
//Reconciliation is an algorithm to diff one tree from another .
//Uses it to decide which tree needs to be updated and which does not .

//Why is React Fast?
//React uses Virtual DOM and reconciliation .
//Keys make it easier to find what needs to be updated or added and hence makes the process faster .

//React Fiber
//New reconciliation engine .
//Came in React16 .
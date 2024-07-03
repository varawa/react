import React from "react" ;
import ReactDOM from "react-dom/client" ;
//Named Import
//import {Title} from "./components/Header"
//Default Import
import Header from "./components/Header"

//import * as obj from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About";
import Error from "./components/Error";

import { createBrowserRouter , RouterProvider } from "react-router-dom";

//createBrowserRouter is a function we import from react-router-dom that helps us create routing .

//obj.Title


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


const AppLayout = ()=>{
    return (
        <>
            <Header/>
            {/* <React.Fragment/> works the same way .*/}
            <Body/>
            <Footer/>
        </>
    ) ;
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root")) ;

root.render(<RouterProvider router = {appRouter}/>) ;


//here router is a prop .

//COMPOSING COMPONENTS
//--------------------

//Config Driven UI (Backend and APIs controls what the website shows on different occassions/places etc. )
//-----------------

//Config : A JS object sent by backend that changes the UI dynamically .


//React.Fragment
//--------------
//Its a component exported by React .
//Its like an empty tag .
//Can be written as <> </>

//Virtual DOM
//-----------
//A represantation of DOM with us is virtual DOM .

//Need
//We need virtual DOM for reconciliation .
//Reconciliation is an algorithm to diff one tree from another .
//Uses it to decide which tree needs to be updated and which does not .

//Why is React Fast?
//------------------
//React uses Virtual DOM and reconciliation .
//Keys make it easier to find what needs to be updated or added and hence makes the process faster .

//React Fiber
//-----------
//New reconciliation engine .
//Came in React16 .

//react-router-dom
//----------------
//Each path in appRouter is ans object .
//We need to provide this app router to our app .
//RouterProvider is used to that (imported from react-router-dom)

//import {useRouteError} from "react-router-dom";
//       ---------------
//useRouteError is a hook .
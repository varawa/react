import React from "react";
import ReactDOM from "react-dom" ;
/*
*   HMR - Hot Module Replacement .
*   File watcher algorithm - C++ .
*   BUNDLING
*   Cleaning our code .
*   Dev and Production build .
*   Super fast build algorithms .
*   Image Optimization .
*   Caching while development .
*   Compression (image compressions too).
*   Compatible with older versions of browsers .
*   HTTPS on dev build .
*   Port Number .
*   Consistent hashing algorithm .
*   Tree Shaking - Removing unwanted functions .
*   Zero Configuration .
*
*/

console.log("ive been called") ;

const heading1 = React.createElement("h1" , 
    {  
        id:"title",
        key:"h1"
    }
    , "Heading1"
);
const heading2 = React.createElement("h2" , 
    {  
        //Props(they can be anything , not only class/id or style) .
        id:"title2",
        key:"h2"
    }
    , "Heading2"
);


////Always have to give keys to the children .
//Why do we need a key?

//DIFFING ALGORITHM(docs)


const container = React.createElement("div", {
    id: "container",
    key:"c1"
}
, [heading1 , heading2]     
//Multiple children are passed through array .
) 

//Passing a react element inside the root element .
//console.log(heading) ;
//A react element is an javascript object .


//React.createElement => object => DOM .


//React overwrites everything that already exists in root .
const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing a react element inside the root .
root.render(container);

//Order of files matters .

//Installing parcel as a dev dependency .
//TRANSITIVE DEPENDENCIES?

//BUNDLERS

//React bundling involves the procedure of grouping and enhancing the source code of a
//React application and its associated components into one or more files to include in a web browser. 
//This bundling process is critical for enhancing the performance and reducing loading times of React applications.



//Using createElement is complex and causes errors when building a big structure .

//JSX??

//JSX => React.createElement => Object => HTML(DOM)
//Babel converts JSX to createElement .

/*const heading = (<h1 id="title" key="h3">
        Namaste React
    </h1>
);*/

//The above thing is called "JSX EXPRESSION" .

//Babel understands JSX and not browser .

//Babel is a JavaScript compiler​
//Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a 
//backwards compatible version of JavaScript in current and older browsers or environments.

//Babel comes alongwith Parcel as a dependency .

//Is JSX == HTML inside JavaScript ? NO
//HTML and JSX are look-alikes but not the same thing .


//JSX is SYNTACTIC SUGAR .

//NodeModules are in gitignore but when a code is pushed to git and deployed ,
//the server creates its own node modules then the website is published .

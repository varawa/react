const heading1 = React.createElement("h1" , 
    {  
        id:"title"
    }
    , "Heading1"
) ;
const heading2 = React.createElement("h2" , 
    {  
        //Props(they can be anything , not only class/id or style) .
        id:"title2"
    }
    , "Heading2"
) ;

const container = React.createElement("div", {
    id: "container"
}
, [heading1 , heading2]
//Multiple children are passed through array .
) 

//Passing a react element inside the root element .
//console.log(heading) ;
//A react element is an javascript object .


//React overwrites everything that already exists in root .
const root = ReactDOM.createRoot(document.getElementById("root")) ;

//Passing a react element inside the root .
root.render(container) ;

//Order of files matters .

//Installing parcel as a dev dependency .


//BUNDLES

//React bundling involves the procedure of grouping and enhancing the source code of a
//React application and its associated components into one or more files to include in a web browser. 
//This bundling process is critical for enhancing the performance and reducing loading times of React applications.
const heading1 = React.createElement("h1" , 
    {  
        id:"title"
    }
    , "Heading1"
) ;
const heading2 = React.createElement("h2" , 
    {  
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

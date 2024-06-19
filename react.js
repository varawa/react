import React from "react" ;
import ReactDOM from "react-dom/client" ;

const heading = (
    <h1 id="title" key="h1">
        Namaste React
    </h1>
)

//React Component .
//1. Functional - NEW
//2. Class Based Component - OLD

//Functional Component
//Name of component starts with capital letter (CONVENTION) .

//Functional component is a normal js function which can return jsx or react .

const HeaderComponent=()=>{
    return (
        <div>
            <h1>Functional Component</h1>
            <h2>Heading 2</h2>
        </div>
    ) ; 
}

const root = ReactDOM.createRoot(document.getElementById("root")) ;

//Passing a react element inside the root .

//Async defer .
root.render(<HeaderComponent/>) ;
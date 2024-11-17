// const parent = React.createElement("div",
//     {id: "parent"}, {id: "child"},
// "This is React by Ankita h1");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// initial code
import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//     "div", 
//     { id: "parent" }, 
//     React.createElement("div", { id: "child" }, "This is React by Ankita C")
//   );
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  
//   root.render(parent);


//Using JSX
// const jsxheading = <h1 className="head">Namaste me </h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);


//React Functional Component



const number = 100+30;

const New = () => (
    <div>
        {title}
        {number}
        
          
        <h1> Namaste New</h1>
        <h2> Namaste New1</h2>
    </div>
)

const HeadingComponent = () => (
   
    <div id="container">
        
        <New />
        <h1> Namaste React Functional Component</h1>
    </div>
    
);

const title = (
    <div>
        <HeadingComponent/>
<h1>Namate Title</h1>

</div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
  



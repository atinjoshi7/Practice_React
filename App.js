import React from "react";
import ReactDom from "react-dom/client";
const Header= ()=>{
    return(
        <div className="header">
            <h1 className="logo">Your Rides</h1>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Since</li>
            </ul>
        </div>
    )
};
const Body= ()=>{
    return(
        <div className="body">
             <Header/>
        </div>
          
    )
};
const Root=ReactDom.createRoot(document.getElementById("root"));
Root.render(<Body/>);
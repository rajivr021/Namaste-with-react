import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src='data:image/png;base64,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' alt="Logo" />
            </div>
            <div className="nav-items"> 
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </div>
        </header>
    );
};


const styleCards={
    // backgroundColor: '#fff', // or any color you want
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      width: "200px",
    //   height:"300px",
      boxshadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      position: "relative",
}



const RestaurantCard=()=>{
   
    return(
         <div className="res-card" style={styleCards}> 
            <img className="food-img" alt="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/32f85fbe-7972-48d3-95ec-80622367523b_31754.jpg"/>
            <h3 >Meghana Food</h3>
            <h5 id="desc">Biryani, North Indian, Asian</h5>
            <div className="TimeRating"><span>4.4 stars</span> <span>38 min</span></div>
         </div>
    )
}


const Body=()=>{
    return (
        <div className="Body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}


const App = () => {
  return <div className="app">
    <Header/>
    <Body/>

  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

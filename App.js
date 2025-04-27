import React from "react";
import ReactDOM from "react-dom/client";
    const menu = [
  { name: "Pizza", price: "$10", description: "Delicious cheesy pizza with toppings." },
  { name: "Burger", price: "$5", description: "Juicy burger with lettuce and tomato." },
  { name: "Fries", price: "$3", description: "Crispy golden French fries." },
  { name: "Pasta", price: "$8", description: "Creamy Alfredo pasta." },
  { name: "Ice Cream", price: "$4", description: "Vanilla ice cream with sprinkles." },
  { name: "Samose", price: "$4", description: "Vanilla ice cream with sprinkles." }
];

function showPopup(message) {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.bottom = "20px";
    popup.style.right = "20px";
    popup.style.padding = "10px 20px";
    popup.style.background = "green";
    popup.style.color = "white";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    popup.style.zIndex = "1000";
    popup.innerText = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        document.body.removeChild(popup);
    }, 2000);
}

function myAlert(item) {
    showPopup(item.name + " added to cart!");

    const button = document.querySelector(`#card-${menu.indexOf(item)} .myBtn`);
    if (button) {
        button.innerText = 'Added!';
        button.className = 'AddedBtn';
        if (button.className === 'AddedBtn' && !button.dataset.listenerAdded) {
            button.addEventListener('click', (e) => {
                alert(item.name+' already added in cart');
            });
            button.dataset.listenerAdded = true; 
        }
        }
    
}

const menuList = menu.map((item, index) =>
    React.createElement( "div", { id: `${"card-" + index}`, className: "food-card" },
        [
            React.createElement("h2", { id: item.name }, `${"Name: " + item.name}`),
            React.createElement("p", { id: item.price }, `${"Price: " + item.price}`),
            React.createElement("p", { id: item.description }, `${"Description: " + item.description}`),
            React.createElement("button", { className: 'myBtn', onClick: () => myAlert(item) }, `Add To Cart`),
        ]
    )
);

const main = React.createElement("main", { id: "menu" }, menuList);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);


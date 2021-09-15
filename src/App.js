import React, { useState } from "react";
import "./styles.css";
import foodDB from "./database.js";

export default function App() {
  const cuisines = Object.keys(foodDB);
  const [clickedCuisine, setClickedCuisine] = useState("Indian");

  function onClickHandler(cuisine) {
    setClickedCuisine(cuisine);
  }

  return (
    <div className="App">
      <header>
        <h1>Foodie App 🍔</h1>
        <p>Hello! foodie checkout these awesome dishes</p>
      </header>

      <main>
        {cuisines.map((cuisine) => {
          return (
            <button
              key={cuisine}
              onClick={() => onClickHandler(cuisine)}
              className="btn"
            >
              {cuisine}
            </button>
          );
        })}

        <hr />

        <div className="container">
          {foodDB[clickedCuisine].map((food) => {
            return (
              <div className="dish">
                <div>
                  <img src={`./images/${food.img}`} className="img"></img>
                </div>
                <h3>Name: {" " + food.dish}</h3>
                <p>{food.description}</p>
                <p>Ratings: {food.ratings}</p>
              </div>
            );
          })}
        </div>
      </main>

      <footer>
        <p>
          Made by <strong>Aman Singh</strong>
        </p>
      </footer>
    </div>
  );
}

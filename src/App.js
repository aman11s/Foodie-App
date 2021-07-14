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

        <ul>
          {foodDB[clickedCuisine].map((food) => {
            return (
              <li key={food.dish}>
                <div className="dish">{food.dish}</div>
              </li>
            );
          })}
        </ul>
      </main>

      <footer>
        <p>
          Made by <strong>Aman Singh</strong>
        </p>
      </footer>
    </div>
  );
}

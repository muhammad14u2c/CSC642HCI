import React from "react";
import "../stylesheets/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Awesome Recipes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/chickenPic.jpeg"
              text="Taste delicious restaurant style cuisine from your home or dorm room"
              label="Hot"
              path="/recipes"
            />
            <CardItem
              src="images/burgerPic.jpeg"
              text="Enjoy filling and tasty homemade burgers"
              label="Savory Dishes"
              path="/recipes"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/eggPic.jpeg"
              text="Enjoy simple foods that satisfy your cravings"
              label="Sour Dishes"
              path="/recipes"
            />
            <CardItem
              src="images/spicyPic.jpg"
              text="Cooking is as good as the food looks"
              label="Spicy Dishes"
              path="/recipes"
            />
            <CardItem
              src="images/cakePic.jpeg"
              text="Sweets just for you (num num)"
              label="Sweet Dishes"
              path="/recipes"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

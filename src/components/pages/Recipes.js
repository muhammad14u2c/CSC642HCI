import React from "react";
import "../../App.css";
import CardItem from "../elements/CardItem";

export default function Recipes() {
  return (
    <>
      <h1 className="recipes">RECIPES</h1>
      <div className="cards">
        <h1>Recipes to save you time and money</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/chickenPic.jpeg"
                text="Taste delicious restaurant style cuisine from your home or dorm room"
                label="Savory and Spicy Dishes"
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
                text="Sweets just for you"
                label="Sweet Dishes"
                path="/recipes"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "../../App.css";
import CardItem from "../elements/CardItem";
import { useHistory } from "react-router-dom";

export default function Recipes() {
  let history = useHistory();

  function goToChicken() {
    history.push("/ChickenRecipeListed");
  }

  function goToBurger (){
    history.push("/BurgerRecipeListed");
  }

  function goToSour (){
    history.push("/SourRecipeListed");
  }
  function goToSpicy (){
    history.push("/SpicyRecipeListed");
  }
  function goToSweet (){
    history.push("/SweetRecipeListed");
  }

  return (
    <>
    
      <h1 className="recipes">RECIPES</h1>
      <div className="cards">
        <h1>Recipes to save you time and money</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <button type="button" onClick={goToChicken}>
              <CardItem
                src="images/chickenPic.jpeg"
                text="Taste delicious restaurant style cuisine from your home or dorm room"
                label="Savory and Spicy Dishes"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToBurger}>
              <CardItem
                src="images/burgerPic.jpeg"
                text="Enjoy filling and tasty homemade burgers"
                label="Savory Dishes"
                path="/recipes"
              /></button>
            </ul>
            <ul className="cards__items">
            <button type="button" onClick={goToSour}>
              <CardItem
                src="images/eggPic.jpeg"
                text="Enjoy simple foods that satisfy your cravings"
                label="Sour Dishes"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToSpicy}>
              <CardItem
                src="images/spicyPic.jpg"
                text="Cooking is as good as the food looks"
                label="Spicy Dishes"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToSweet}>
              <CardItem
                src="images/cakePic.jpeg"
                text="Sweets just for you"
                label="Sweet Dishes"
                path="/recipes"
              />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

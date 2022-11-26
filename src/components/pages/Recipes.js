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
  function goToPizza (){
    history.push("/PizzaRecipeListed");
  }
  function goToCracker (){
    history.push("/CrackerRecipeListed");
  }
  function goToPancake (){
    history.push("/PancakeRecipeListed");
  }
  function goToBrownie (){
    history.push("/BrownieRecipeListed");
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
                text="Restaurant Chicken From Home"
                label="Savory and Spicy Dish"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToBurger}>
              <CardItem
                src="images/burgerPic.jpeg"
                text="Homemade Island Burger"
                label="Savory Dish"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToPizza}> 
              <CardItem
                src="images/pizzaPic.jpeg"
                text="Oven Baked Pizza"
                label="Savory Dish"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToCracker}>
              <CardItem
                src="images/crackers.jpg"
                text="Quick Appetizer"
                label="Savory Dish"
                path="/recipes"
              /></button>
            </ul>
            <ul className="cards__items">
            <button type="button" onClick={goToSour}>
              <CardItem
                src="images/eggPic.jpeg"
                text="Quick Egg Rush"
                label="Sour Dish"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToSpicy}>
              <CardItem
                src="images/spicyPic.jpg"
                text="Tongue Watering Spice Noodles"
                label="Spicy Dish"
                path="/recipes"
              /></button>
              <button type="button" onClick={goToSweet}>
               
              <CardItem
                src="images/cakePic.jpeg"
                text="Chocoloate Mountain Cake"
                label="Sweet Dish"
                path="/recipes"
              />
              </button>
              <button type="button" onClick={goToBrownie}>
                
              <CardItem
                src="images/browniePic.jpg"
                text="Satisfying Brownies"
                label="Sweet Dish"
                path="/recipes"
              />
              </button>
              <button type="button" onClick={goToPancake}>
                
              <CardItem
                src="images/pancakePic.jpeg"
                text="Pancake Heaven"
                label="Sweet Dish"
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

import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function BurgerRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p>1 large egg, ½ teaspoon salt ½ teaspoon ground black
          pepper </p>
          <p>1 pound ground beef ½ cup fine dry bread crumbs</p> <br></br>
        <p>Directions: </p>
        <p> Preheat an outdoor grill for high heat and lightly oil grate.</p>
        <p>
        Whisk together egg, salt, and pepper in a medium bowl</p>

        <p>
        Add ground beef and bread crumbs and mix with your hands
        or a fork until well blended. </p>
         <p>Form into four 3/4-inch-thick patties.</p>
        <p>
        Place patties on the preheated grill. Cover and cook 6 to 8 minutes per side</p>
        <p> An instant-read thermometer inserted into the center should read at least 160 degrees F</p>
        <img src="images/burgerPic.jpeg" height={350} width={500}></img>
      </div>
    </>
  );
}

export default BurgerRecipeItem;

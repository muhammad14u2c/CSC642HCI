import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function ChickenRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p> 1 pound chicken thighs cut into 1 inch chunks </p>
        <p>1/3 cup cornstarch oil for frying </p>
        <p> 6 cloves garlic minced 1 tablespoon</p>

        <p>
          ginger minced 1 teaspoon red chili flakes 3 dried red peppers
          (optional)
        </p> <br></br>
        <p>Directions:</p>
        <p>
          In a large bowl, toss the chicken thighs with the cornstarch well so
          every chicken piece is covered in cornstarch
        </p>
        <p>Add vegetable oil to a large pan, at least so it reaches the mid of the pan.</p>
        <p>Once the oil is hot, add the chicken and fry on medium-high heat until crispy and golden.</p>
        <p>Remove chicken from the pan, save one tablespoon of oil and discard the rest.</p>
        <p>Add garlic, ginger and red pepper flakes to the pan and cook on low heat </p>
          <p> for about 30 seconds, until you smell the garlic.</p>
        <p>Stir continuously and be careful as the garlic and red pepper flakes can burn quickly.</p>
        <p>Add in the chicken back to the pan and toss.</p>
        <p>Serve immediately with rice</p>
        <img src="images/chickenPic.jpeg" height={225} width={400}></img>

      </div>
    </>
  );
}

export default ChickenRecipeItem;

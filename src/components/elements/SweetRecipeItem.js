import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function SpicyRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p>
          
          1 1/2 cups all-purpose flour gluten-free, (if necessary) </p>
<p> 1 cup sugar ,1 teaspoon baking soda, 1/2 teaspoon salt, 1 teaspoon white vinegar </p>
<p> 5 tablespoon canola oil , 1 1/2 teaspoon vanilla extract, 1 cup water</p>
       
        <br></br>
        <p>Directions:</p> <br></br>
        <p>
        Preheat the oven to 180C/350F. Line a square pan with parchment paper
        </p>
        <p>
        leaving an inch over each side overhanging, for easy removal.

        </p>
        <p>
        In a large mixing bowl, add your dry ingredients and mix well. </p>
        <p> Form three caves (depressions) in the dry mixture.
        </p>
        <p>
        In one, add the vinegar. In the second, add the vanilla extract, and in the final one, add the Oil.
        </p>
        <p>
        Pour the water over the top and using a whisk or wooden spoon, mix together, until fully combined. </p>
        <p> Transfer your vanilla cake batter in the lined pan. Bake for 25-30 minutes
        </p>
        <p>
          
        Remove from the oven and let cool in the pan for 10 minutes, before transferring to a wire rack to cool completely.
        </p>
        <p> If desired, frost the cooled cake.</p>
    
        <img src="images/cakePic.jpeg" height={250} width={450}></img>
      </div>
    </>
  );
}

export default SpicyRecipeItem;

import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function PancakeRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p> 1 cup rice flour 2 tablespoons sugar </p>
        <p>3 teaspoons baking powder 1 cup milk, any* </p>
        <p>1 egg, beaten 1 tablespoon butter, melted*</p>
        <p>½ teaspoon vanilla extract, optional</p> <br></br>
        <p>Directions:</p>
        <p>In a large bowl, combine the rice flour, sugar, and baking powder </p>
        <p>
          Make a well in the middle of the bowl, and add the milk, egg, butter,
          and vanilla if using.
        </p>
        <p>
          With a whisk, combine the wet ingredients into the dry ingredients
    
        </p>
        <p>Set the bowl aside and let the mixture sit for 5 minutes.</p>
        <p>
          Heat a non-stick griddle to medium-high heat (350-375F) or a large
          non-stick pan.
        </p>
        <p>
          {" "}
          Once hot, grease with oil or butter and pour about 3 tablespoons of
          batter{" "}
        </p>
        <p> onto the hot pan per pancake.</p>
        <p>
          Cook the first side for approximately 2 minutes, lip and cook for an
          additional minute on the other side.
        </p>
        <p> Serve with your favorite toppings.</p>
        <img src="images/pancakePic.jpeg" height={185} width={420}></img>
      </div>
    </>
  );
}

export default PancakeRecipeItem;

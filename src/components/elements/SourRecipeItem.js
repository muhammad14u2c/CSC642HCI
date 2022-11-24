import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function SourRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p>
          {" "}
          6 eggs, 2 tbsp butter, 2 tbsp flour, 1 to 2 cups of water{" "}
        </p>
        <p>1/2 tsp salt (or to taste), 3 tsp balsamic vinegar, 2 tsp sugar </p>
        <p>
          2 tsp medium hot mustard (if you prefer mild mustard that will be fine
          too) Chives, chopped
        </p>
        <p>
          ginger minced 1 teaspoon red chili flakes 3 dried red peppers
          (optional)
        </p>{" "}
        <br></br>
        <p>Directions:</p>
        <p>
          Melt the butter in a large pan on the stove over medium heat Once the
          butter is hot add the flour
        </p>
        <p>
          stir continuously till you get a flour butter paste and it is
          beginning to turn lightly brown
        </p>
        <p>
          Begin to add the water in small portions while continuing to stir the
          ingredients in the pan
        </p>
        <p>
          Keep adding more water till you end up with smooth and thickish sauce
        </p>
        <p>
          Add salt, mustard, vinegar and sugar and blend them well into the
          sauce
        </p>
        <p>
          {" "}
          add the eggs individually to the sauce, cover the pan with a lid{" "}
        </p>
        <p> reduce the heat and let the eggs gently simmer 8-10 mins</p>
        <p>
          Switch off the stove and serve the eggs with fried or boiled potatoes
          garnished with some chives
        </p>
        <img src="images/eggPic.jpeg" height={275} width={400}></img>
      </div>
    </>
  );
}

export default SourRecipeItem;

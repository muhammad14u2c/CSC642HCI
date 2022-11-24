import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function SpicyRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p>8 ounces rice noodles, 2 shallots sliced, 5 cloves garlic minced </p>
        <p>
          {" "}
          ⅓ cup chopped scallions/green onions just the white part, save the
          green for garnish!{" "}
        </p>
        <p>
          1 tbsp fresh grated ginger, 1 tbsp oil, 4-5 tbsp low sodium soy sauce
          or tamari{" "}
        </p>
        <p>
          {" "}
          1-3 tbsp chili garlic sauce, 1 tbsp brown sugar can sub coconut sugar{" "}
        </p>
        <p>
          1 tbsp sriracha more or less to taste, 2 tsp rice vinegar ,1 tbsp
          toasted sesame oil{" "}
        </p>
        <p>1/2 tsp red pepper flakes</p>
        <p>1/2 tsp salt (or to taste), 3 tsp balsamic vinegar, 2 tsp sugar </p>
        <p>
          2 tsp medium hot mustard (if you prefer mild mustard that will be fine
          too) Chives, chopped
        </p>
        <p>
          ginger minced 1 teaspoon red chili flakes 3 dried red peppers
          (optional)
        </p>
        <br></br>
        <p>Directions:</p>
        <p>
          Bring a large pot of water to a boil and cook noodles according to
          package instructions.
        </p>
        <p>
          add the shallots and garlic to a pot and saute with the oil until
          browned, about 10 minutes.
        </p>
        <p>
          Add the white part of the scallions and the grated ginger and saute
          for 2-3 more minutes.
        </p>
        <p>add in all remaining sauce ingredients and whisk together</p>
        <p>
          When the noodles are done cooking, combine with the sauce and toss
          until well coated. Let simmer.{" "}
        </p>
        <p>
          Top with red chili flakes for more spice and the remaining chopped
          scallions. Enjoy!
        </p>

        <img src="images/spicyPic.jpg" height={140} width={300}></img>
      </div>
    </>
  );
}

export default SpicyRecipeItem;

import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function BrownieRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p> ½ cup almond butter ¼ cup coconut oil, melted </p>
        <p>¾ cup coconut sugar 2 large eggs </p>
        <p>1 tablespoon vanilla extract ¼ cup water</p>
        <p>1 cup almond flour ½ cup unsweetened cocoa powder</p>{" "}
        <p>1 teaspoon baking soda ½ teaspoon salt</p>
        <p>4 ounces dark chocolate, coarsely chopped</p>
        <br></br>
        <p>Directions:</p>
        <p>
        Preheat oven to 350F. Line a 9 x 9-inch square baking pan with parchment paper.
        </p>
        <p>
        In a large bowl, combine the almond butter, coconut oil, coconut sugar, eggs, </p>
        
        <p> vanilla extract, and water until smooth.
        </p>
        <p>
        Stir in the almond flour, cocoa powder, baking soda, and salt.
        </p>
        <p>
        Fold in the chocolate pieces to evenly distribute into the dough. 
        </p>
        <p>
        Transfer the batter to the prepared pan and bake for 20 minutes or until lightly browned.
        </p>
        <p>
          {" "}
          Remove from oven and allow to cool before slicing into 12 squares.{" "}
        </p>
       
        <img src="images/browniePic.jpg" height={220} width={400}></img>
      </div>
    </>
  );
}

export default BrownieRecipeItem;

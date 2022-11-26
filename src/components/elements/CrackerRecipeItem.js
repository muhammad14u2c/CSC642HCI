import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function CrackerRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p>
          {" "}
          ½ avocado, mashed{" "}
        </p>
        <p>2 Crackers </p>
        <p>
        ¼ cup fresh pico de gallo
        </p>
        <br></br>
        <p>Directions:</p>
        <p>
        Spread the mashed avocado over each cracker. </p>
        <p> Top with pico de gallo and enjoy. 
        </p>
        <img src="images/crackers.jpg" height={275} width={400}></img>
      </div>
    </>
  );
}

export default CrackerRecipeItem;

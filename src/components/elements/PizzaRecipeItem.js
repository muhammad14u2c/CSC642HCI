import React from "react";
import "../../App.css";
import CardItem from "./CardItem";

function PizzaRecipeItem() {
  return (
    <>
      <div className="section-container text-white">
        <p>Ingredients: </p>
        <p> 6 large eggs, whisked, 1 tablespoon butter or oil, for cooking </p>
        <p>2 Udi’s Gluten Free Pizza Crusts, 1 cup mozzarella cheese </p>
        <p>4 slices Canadian ham (or preffered meat) </p> <br></br>
        <p>Directions:</p>
        <p>
          Preheat oven to 400F and remove gluten-free pizza crusts from
          packaging.
        </p>
        <p>
          In a large, non-stick skillet, melt butter or oil and add whisked
          eggs.
        </p>
        <p>
          Cook, lifting gently and stirring slightly to allow uncooked portions
          to flow underneath{" "}
        </p>
        <p> 2-3 minutes until set but not overcooked</p>
        <p>Remove from heat, set aside.</p>
        <p>
          Sprinkle ¼ cup of cheese onto each pizza crust and distribute the egg
          over crust
        </p>
        <p>
          {" "}
          On a flat surface, cut Canadian bacon or ham into small pieces and top
          the eggs.{" "}
        </p>
        <p>
          {" "}
          Sprinkle remaining cheese evenly onto both pizza crusts, and bake
          directly on the baking rack for 7 minutes{" "}
        </p>
        <p> until the cheese is bubbly and crust is golden brown.</p>
        <p>Carefully remove from oven and enjoy.</p>
        <img src="images/pizzaPic.jpeg" height={220} width={400}></img>
      </div>
    </>
  );
}

export default PizzaRecipeItem;

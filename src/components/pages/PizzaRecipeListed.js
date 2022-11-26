import React from "react";
import "../../App.css";

import PizzaRecipeItem from "../elements/PizzaRecipeItem"; 

export default function PizzaRecipeListed() {
  return (
    <>
      <h2 className="recipes">Pizza Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <PizzaRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

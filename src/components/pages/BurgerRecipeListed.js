import React from "react";
import "../../App.css";

import BurgerRecipeItem from "../elements/BurgerRecipeItem"; 

export default function BurgerRecipeListed() {
  return (
    <>
      <h2 className="recipes">Burger Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <BurgerRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

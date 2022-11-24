import React from "react";
import "../../App.css";

import SpicyRecipeItem from "../elements/SpicyRecipeItem"; 

export default function SpicyRecipeListed() {
  return (
    <>
      <h2 className="recipes">Spicy Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <SpicyRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

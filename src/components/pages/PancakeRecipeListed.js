import React from "react";
import "../../App.css";

import PancakeRecipeItem from "../elements/PancakeRecipeItem"; 

export default function PancakeRecipeListed() {
  return (
    <>
      <h2 className="recipes">Pancake Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <PancakeRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

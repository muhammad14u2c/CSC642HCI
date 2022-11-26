import React from "react";
import "../../App.css";

import BrownieRecipeItem from "../elements/BrownieRecipeItem"; 

export default function BrownieRecipeListed() {
  return (
    <>
      <h2 className="recipes">Brownie Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <BrownieRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

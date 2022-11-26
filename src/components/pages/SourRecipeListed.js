import React from "react";
import "../../App.css";

import SourRecipeItem from "../elements/SourRecipeItem"; 

export default function SourRecipeListed() {
  return (
    <>
      <h2 className="recipes">Egg (Sour) Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <SourRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

import React from "react";
import "../../App.css";

import CrackerRecipeItem from "../elements/CrackerRecipeItem"; 

export default function CrackerRecipeListed() {
  return (
    <>
      <h2 className="recipes">Quick Cracker Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <CrackerRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

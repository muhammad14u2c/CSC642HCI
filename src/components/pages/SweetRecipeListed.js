import React from "react";
import "../../App.css";

import SweetRecipeItem from "../elements/SweetRecipeItem"; 

export default function SweetRecipeListed() {
  return (
    <>
      <h2 className="recipes">Sweet Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <SweetRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

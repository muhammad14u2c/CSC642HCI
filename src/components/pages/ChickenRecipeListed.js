import React from "react";
import "../../App.css";
import CardItem from "../elements/CardItem";
import ChickenRecipeItem from "../elements/ChickenRecipeItem";

export default function ChickenRecipeListed() {
  return (
    <>
      <h2 className="recipes">Chicken Recipe</h2>
      <div className="container h-100">
        <div class="row justify-content-center">
        <ChickenRecipeItem/>
          
        </div>
      </div>
    </>
  );
}

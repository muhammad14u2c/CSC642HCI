import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "../stylesheets/Section.css";

function Section() {
  return (
    <div className="section-container">
      <video src="/videos/pizzaVideo.mp4" autoPlay loop muted />
      <h1>START COOKING TODAY</h1>
      <p>It's your body and it's your Kitchen</p>
      <div className="section-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          START NOW
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          SEE FOR YOURSELF <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Section;

import React from "react";
import "./Title.css";

const Title = props => (
  <div className="nav nav-bar sticky-top bg-primary row navy">
  <div className="col-sm brand">The Clicky Game</div>
  <div className="col-sm" onClick={() => props.resetGame()}> {props.gameMessage} </div>
  <div className="col-sm"> Score: {props.currentScore} | Top Score: {props.highScore}</div>
</div>
);

export default Title;

/* <h1 className="title">{props.children}</h1>;

export default Title; */

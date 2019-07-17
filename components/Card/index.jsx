import React from "react";
import Hero from "./Hero";
import Highlight from "./Highlight";
import Standard from "./Standard";

function Card(props) {
  const { type } = props;

  switch (type) {
    case "hero":
      return <Hero data={props.data} />;
    case "highlight":
      return <Highlight data={props.data} />;
    default:
      return <Standard data={props.data} />;
  }
}

export default Card;

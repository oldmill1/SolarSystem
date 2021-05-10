import React from "react";
import Universe from "../Universe";
import { Earth } from "../styles";
import { proportionsByPlanet as proportions } from "../planets";

const Planet = ({ name }) => {
  const { sun } = React.useContext(Universe);
  switch (name) {
    case "earth":
      return <Earth size={(proportions[name] / 100) * sun} />;
    default:
      throw new Error("Invalid planet name");
  }
};

export default Planet;

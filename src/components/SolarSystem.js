import React from "react";
import { Sun, SolarSystemBase } from "../styles";
import { planetsByName as allPlanets } from "../planets";
import Universe from "../Universe";

const SolarSystem = ({ planets }) => {
  const { sun } = React.useContext(Universe);

  return (
    <SolarSystemBase>
      <Sun size={sun} />
      {planets.map((p) => allPlanets[p])}
    </SolarSystemBase>
  );
};

export default SolarSystem;

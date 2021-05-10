import Planet from "/src/components/Planet";
import { v4 as uuidv4 } from "uuid";

export const proportionsByPlanet = {
  earth: "0.92"
};

export const planetsByName = {
  earth: <Planet name="earth" key={uuidv4()} />
};

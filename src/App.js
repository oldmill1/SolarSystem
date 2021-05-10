import React from "react";
import Universe from "./Universe";
import SolarSystem from "/src/components/SolarSystem";

export default function App() {
  const [sun, setSun] = React.useState(500);
  const [tempSun, setTempSun] = React.useState(sun);
  return (
    <Universe.Provider
      value={{
        sun: sun
      }}
    >
      <input
        type="text"
        onChange={(e) => setTempSun(e.target.value)}
        value={tempSun}
      />
      <button
        onClick={() => {
          setSun(tempSun);
        }}
      >
        Change Sun Size
      </button>
      <SolarSystem planets={["earth"]}></SolarSystem>
    </Universe.Provider>
  );
}

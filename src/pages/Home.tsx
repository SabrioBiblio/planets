import { useState } from "react";
import { PlanetDetails } from "../components/PlanetDetails";
import { SpaceStations } from "../components/SpaceStations";

const Home = () => {
  const [currentSpaceStation, setCurrentSpaceStation] = useState<number>(0);
  const [isDetailsClose, setDetailsClose] = useState<boolean>(true);

  const stationClickHandler = (id: number) => {
    setDetailsClose(false);
    setCurrentSpaceStation(id);
  };

  return (
    <div style={{ display: "flex" }}>
      <SpaceStations
        stationClickHandler={stationClickHandler}
        isClose={isDetailsClose}
      />
      <PlanetDetails
        spaceStationId={currentSpaceStation}
        setDetailsClose={setDetailsClose}
        isClose={isDetailsClose}
      />
    </div>
  );
};

export default Home;

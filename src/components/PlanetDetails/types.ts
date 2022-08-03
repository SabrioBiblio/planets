import { IPlanet } from "../../types/types";

export interface IPlanetDetails {
  spaceStationId: number;
  setDetailsClose: React.Dispatch<React.SetStateAction<boolean>>;
  isClose: boolean;
}

export interface ISpaceCenterFlights {
  flights: ISpaceCenterFlightNodes;
}

export interface ISpaceCenterFlightNodes {
  nodes: ISpaceCenterFlight[];
}

export interface ISpaceCenterFlight {
  departureAt: string;
  id: string;
  landingSite: {
    name: string;
    planet: IPlanet;
  };
}

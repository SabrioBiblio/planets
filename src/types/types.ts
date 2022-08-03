export interface ISpaceStations {
  spaceCenters: {
    pagination: any;
    nodes: ISpaceStation[];
  };
}

export interface ISpaceStationSuccess {
  spaceCenter: ISpaceStation;
}

export interface ISpaceStation {
  id: number;
  name: string;
  description: string;
  planet: IPlanet;
}

export interface IPlanet {
  name: string;
  id: number;
}

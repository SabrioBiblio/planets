import { ISpaceStation } from "../../types/types";

export interface IPlanetCard {
  data: ISpaceStation;
  stationClickHandler: (id: number) => void;
}

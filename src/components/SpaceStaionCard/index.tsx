import { FC } from "react";
import { IPlanetCard } from "./types";
import {
  Planet1,
  Planet2,
  Planet3,
  Planet4,
  Planet5,
  Planet6,
  Planet7,
  Planet8,
  Planet9,
} from "../../assets/images";
import styled from "styled-components";

export const SpaceStaionCard: FC<IPlanetCard> = ({
  data,
  stationClickHandler,
}) => {
  const planetsImage = [
    <Planet1 />,
    <Planet2 />,
    <Planet3 />,
    <Planet4 />,
    <Planet5 />,
    <Planet6 />,
    <Planet7 />,
    <Planet8 />,
    <Planet9 />,
    <Planet1 />,
    <Planet2 />,
    <Planet3 />,
    <Planet4 />,
    <Planet5 />,
    <Planet6 />,
  ];

  return (
    <SpaceStationWrapperDiv onClick={() => stationClickHandler(data?.id)}>
      <div className="space-station-image">
        {planetsImage[data?.planet?.id]}
      </div>
      <div className="space-station-title">
        <SpaceStationTitleH4>{data?.name}</SpaceStationTitleH4>
      </div>
    </SpaceStationWrapperDiv>
  );
};

const SpaceStationTitleH4 = styled.h4`
  margin-bottom: 0.5rem;
`;

const SpaceStationWrapperDiv = styled.div`
   {
    cursor: pointer;
    width: 285px;
    background-color: #fff;
    box-shadow: 0px 5px 29px -13px rgba(0, 0, 0, 0.75);
    border-radius: 1.5rem;
    padding: 1rem;
    transition: 0.3s all ease;
    & .space-station-image {
      text-align: center;
    }
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`;

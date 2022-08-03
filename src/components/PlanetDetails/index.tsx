import { useQuery } from "@apollo/client";
import { FC } from "react";
import { querySpaceCenter, querySpaceCenterFlights } from "../../queries";
import { ISpaceStationSuccess } from "../../types/types";
import { IPlanetDetails, ISpaceCenterFlights } from "./types";
import styled from "styled-components";
import { Loader } from "../../assets/images";
import { dataFormatter } from "../../utils";
import { Spinner } from "../Spinner";

export const PlanetDetails: FC<IPlanetDetails> = ({
  spaceStationId,
  isClose,
  setDetailsClose,
}) => {
  const { loading: spaceCenterloading, data: spaceCenterData } =
    useQuery<ISpaceStationSuccess>(querySpaceCenter, {
      variables: { id: spaceStationId },
    });

  const { loading: spaceCenterFlightsloading, data: spaceCenterFlightsData } =
    useQuery<ISpaceCenterFlights>(querySpaceCenterFlights, {
      variables: { from: spaceStationId },
    });

  const onClosehandler = () => {
    setDetailsClose(true);
  };

  return (
    <SpaceStationWrapperDiv className={!isClose ? "open" : "close"}>
      <CloseDiv onClick={onClosehandler}>✖</CloseDiv>
      {!spaceCenterloading && !spaceCenterFlightsloading ? (
        <>
          <div>
            <SpaceStationTitleH2>
              {spaceCenterData?.spaceCenter?.name}
            </SpaceStationTitleH2>
          </div>
          <SpaceStationDescriptionDiv>
            {spaceCenterData?.spaceCenter?.description}
          </SpaceStationDescriptionDiv>
          <div>
            <SpaceStationDeperturesDiv>Departures</SpaceStationDeperturesDiv>
            {spaceCenterFlightsData?.flights?.nodes.map((flight) => (
              <DepartureDiv>
                <PlanetImg>
                  <Loader />
                </PlanetImg>
                <DepartureDetailsDiv>
                  <div className="departure">
                    To: Planet {flight?.landingSite?.planet?.name}
                  </div>
                  <div>{dataFormatter(flight?.departureAt)}</div>
                </DepartureDetailsDiv>
              </DepartureDiv>
            ))}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </SpaceStationWrapperDiv>
  );
};

const SpaceStationDescriptionDiv = styled.div`
  margin-bottom: 1rem;
`;

const SpaceStationDeperturesDiv = styled.div`
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const SpaceStationTitleH2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SpaceStationWrapperDiv = styled.div`
  box-shadow: 0px 5px 29px -13px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  width: 25rem;
  border-radius: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  transition: 0.3s all ease;
  &.open {
    transform: translateX(0%);
  }
  &.close {
    transform: translateX(100%);
  }
`;

const CloseDiv = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: #e7e8eb;
    border-radius: 0.5rem;
    width: 2.1rem;
    height: 2.1rem;
    margin-left: auto;
    cursor: pointer;
  }
`;

const DepartureDiv = styled.div`
   {
    display: flex;
    height: 50px;
    margin-bottom: 0.5rem;
  }
`;

const PlanetImg = styled.div`
   {
    background: #f4f4f4;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    & svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const DepartureDetailsDiv = styled.div`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    & .departure {
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
`;

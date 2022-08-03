import { useQuery } from "@apollo/client";
import { FC, useState } from "react";
import styled from "styled-components";
import { querySpaceCenters } from "../../queries";
import { ISpaceStations } from "../../types/types";
import { Pagination } from "../Pagination";
import { SpaceStaionCard } from "../SpaceStaionCard";
import { Spinner } from "../Spinner";
import { ISpaceStationsComponent } from "./types";

export const SpaceStations: FC<ISpaceStationsComponent> = ({
  isClose,
  stationClickHandler,
}) => {
  const [page, setPage] = useState<number>(1);

  const { loading: spaceCentersLoading, data: spaceCentersData } =
    useQuery<ISpaceStations>(querySpaceCenters, {
      variables: { page: page },
    });
  console.log(spaceCentersData);
  return (
    <SpaceStationsWrapperDiv isClose={isClose}>
      <SpaceStationH1>Spacious</SpaceStationH1>
      {!spaceCentersLoading ? (
        <>
          <SpaceStationsDiv>
            {spaceCentersData?.spaceCenters?.nodes?.map((spaceCenter) => (
              <SpaceStaionCard
                stationClickHandler={stationClickHandler}
                key={spaceCenter?.id}
                data={spaceCenter}
              />
            ))}
          </SpaceStationsDiv>
          <Pagination leftClick={setPage} rightClick={setPage} />
        </>
      ) : (
        <Spinner />
      )}
    </SpaceStationsWrapperDiv>
  );
};

interface ISpaceStationsDiv {
  isClose: boolean;
}

const SpaceStationH1 = styled.h1`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const SpaceStationsDiv = styled.div`
   {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

const SpaceStationsWrapperDiv = styled.div<ISpaceStationsDiv>`
   {
    margin: 0 auto;
    transition: 0.3s all ease;
    padding-left: ${(props) => (!props.isClose ? "5rem" : "12rem")};
    padding-right: ${(props) => (!props.isClose ? "28rem" : "12rem")};
  }
`;

import { FC } from "react";
import styled from "styled-components";
import { IPagination } from "./types";

export const Pagination: FC<IPagination> = ({ leftClick, rightClick }) => {
  const onClickLeftHandler = () => {
    leftClick((prevState) => (prevState > 1 ? prevState - 1 : prevState));
  };

  const onClickRightHandler = () => {
    rightClick((prevState) => prevState + 1);
  };

  return (
    <PaginationWrapperDiv>
      <PaginationLeftDiv onClick={onClickLeftHandler}>
        ‹ Previous
      </PaginationLeftDiv>
      <PaginationRightDiv onClick={onClickRightHandler}>
        Next ›
      </PaginationRightDiv>
    </PaginationWrapperDiv>
  );
};

const PaginationWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const PaginationLeftDiv = styled.div`
  cursor: pointer;
  margin-right: 3rem;
`;

const PaginationRightDiv = styled.div`
  cursor: pointer;
  margin-left: 3rem;
`;

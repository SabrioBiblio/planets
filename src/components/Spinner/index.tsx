import { SpinnerSVG } from "../../assets/images";
import styled, { keyframes } from "styled-components";

export const Spinner = () => {
  return (
    <WrapperSpinner>
      <SpinnerSVG />
    </WrapperSpinner>
  );
};

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100%{
  transform: rotate(359deg);
}`;

const WrapperSpinner = styled.span`
  position: absolute;
  animation-name: ${rotateAnimation};
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

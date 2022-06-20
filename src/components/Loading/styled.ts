import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Cycle = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export const LoadingImg = styled.img`
  object-position: center;
  animation-name: ${Cycle};
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

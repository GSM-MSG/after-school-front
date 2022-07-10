import styled from "@emotion/styled";

export const bg = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 0, 0.6);
  backdrop-filter: Blur(2px);
`;

export const Wrapper = styled.div`
  z-index: 300;
  width: 34.375rem;
  height: 31.75rem;
  background: #fcffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 700px) {
    width: 79vw;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 2rem;
`;
export const RadioBox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-left: 9rem;
    height: 1.5rem;
    margin-bottom: 2rem;
    width: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 400;
      cursor: pointer;
    }
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      cursor: pointer;
      border: 2px solid #00a8fe;
      transition: 0.2s all;
      margin-right: 5px;
      aspect-ratio: 1 / 1;

      position: relative;

      :checked {
        ::before {
          content: "";
          width: 10px;
          height: 10px;
          aspect-ratio: 1 / 1;
          background: #00a8fe;
          position: absolute;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: show 0.2s;
          @keyframes show {
            0% {
              opacity: calc(0);
            }
          }
        }
      }
    }
  }
  @media (max-width: 700px) {
    label {
      margin-left: 21vw;
      width: 35vw;
    }
  }
`;
export const SelectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 8px;
`;
type ButtonType = {
  color: string;
};
export const Button = styled.button<ButtonType>`
  cursor: pointer;
  color: ${(prop) => {
    switch (prop.color) {
      case "grade":
        return "#000000";
      case "blue":
        return "#FCFFFF";
    }
  }};
  border: none;
  width: 100%;
  height: 5rem;
  font-size: 1.2rem;
  font-weight: 6 00;
  background: ${(prop) => {
    switch (prop.color) {
      case "grade":
        return "#D0D1D8";
      case "blue":
        return "#4C53FF";
    }
  }};
  ${(prop) => {
    switch (prop.color) {
      case "grade":
        return "border-bottom-left-radius: 8px;";
      case "blue":
        return "border-bottom-right-radius: 8px;";
    }
  }};
`;

import styled from "@emotion/styled";

type SelectButtonType = {
  trun: boolean;
};

type placedprop = {
  num: number;
};

export const Toggle = styled.div`
  width: 60px;
  height: 60px;
  background: #4c53ff;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  svg {
    animation: fadeInDown 1s;

    @keyframes fadeInDown {
      0% {
        opacity: calc(0);
      }
    }
  }
`;

export const Button = styled.div<placedprop>`
  width: 52px;
  height: 52px;
  background: #a5a5fe;
  cursor: pointer;
  --i: ${(props) => props.num};
  border-radius: 50%;
  svg {
    justify-content: center;
    align-items: center;
  }
  animation: fadeInDown 1s;

  @keyframes fadeInDown {
    0% {
      opacity: calc(0);
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: transform 0.5s;
  transition-delay: calc(0.2s * var(--i));
  cursor: pointer;
`;

export const BtBox = styled.div<SelectButtonType>`
  position: fixed;
  bottom: 12rem;
  right: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(prop) =>
    prop.trun
      ? `.bt {
      transform: translateY(calc(-40rem / 8 * (var(--i) + 1)));
    }`
      : ""}
  @media (max-width: 105rem) {
    right: 15vw;
  }
`;

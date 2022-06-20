import styled from "@emotion/styled";

type StlyedProps = {
  state?: boolean;
};

type FilterProps = {
  filter: string;
};

export const AfterSchool = styled.div`
  height: none;
`;

export const AfterSchoolBox = styled.div<FilterProps>`
  background-color: #1e1e1c;
  animation: ${(props) => {
    return props.filter === "true" ? "fadeInDown 1s" : "fadeInUp 1s";
  }};
  @keyframes fadeInDown {
    0% {
      opacity: calc(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: calc(0);
    }
  }
`;

export const Search = styled.div`
  width: 35rem;
  height: 4rem;
  margin: 0 auto;
  margin-top: 8rem;
  border-bottom: 2px solid white;
  align-items: center;
  display: flex;
  svg {
    margin: 0 10px;
    cursor: pointer;
  }
  @media (max-width: 65rem) {
    width: 54vw;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  color: white;
  font-size: 1rem;
  font-weight: 100;
  background-color: transparent;
  border: none;
  ::placeholder {
    font-size: 1rem;
    padding-left: 5vw;
    text-align: center;
  }
  :focus {
    outline: none;
  }
`;

export const CurseList = styled.div`
  width: 50rem;
  height: 2.5rem;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 5px;
  color: black;
  font-size: 1rem;
  display: flex;
  align-items: center;
  span {
    width: 4rem;
    text-align: center;
    margin-left: 8rem;
    @media (max-width: 55rem) {
      margin-left: 13vw;
      margin-right: 4vw;
      white-space: nowrap;
    }
    @media (max-width: 30rem) {
      font-size: 3.5vw;
      margin-left: 8vw;
      margin-right: 6vw;
      white-space: nowrap;
    }
  }
  @media (max-width: 55rem) {
    width: 90vw;
    height: 4rem;
  }
  @media (max-width: 30rem) {
    height: 2rem;
  }
`;

export const Enrolment = styled.div`
  width: 50rem;
  height: 3.5rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  background-color: white;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
  div {
    width: 50rem;
    display: flex;
    @media (max-width: 55rem) {
      width: 90vw;
    }
  }
  p {
    width: 4.5rem;
    text-align: center;
    margin-left: 7.6rem;
    white-space: nowrap;
    @media (max-width: 55rem) {
      margin-left: 12vw;
      margin-right: 5vw;
      white-space: nowrap;
    }
    @media (max-width: 30rem) {
      margin-left: 7vw;
      margin-right: 5vw;
      white-space: nowrap;
    }
  }
  @media (max-width: 55rem) {
    display: block;
    height: 6.5rem;
    width: 90vw;
  }
`;
export const SelectButton = styled.button<StlyedProps>`
  width: 6rem;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  margin-right: 2rem;
  background-color: ${({ state }) => {
    switch (state) {
      case undefined:
        return "#4C53FF";
      case true:
        return "#ED6666";
      case false:
        return "transparent";
      default:
        console.error("SelectButton Color Error");
        break;
    }
  }};
  position: relative;
  overflow: hidden;
  &:hover:after {
    right: -10%;
    border-radius: 5rem;
  }

  ::after {
    content: "";
    display: block;
    width: 120%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 100%;
    background: rgba(0, 0, 0, 0.1);
    transition: 0.5s cubic-bezier(0.23, 0.56, 0.68, 0.38);
  }
  @media (max-width: 55rem) {
    display: block;
    width: 85vw;
    margin: 0 auto;
  }
`;

export const ScollBox = styled.div`
  margin: 0 auto;
  width: 60rem;
  @media (max-width: 61rem) {
    width: 90vw;
  }
`;

export const FilterBox = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  width: 28rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 62rem) {
    width: 45vw;
  }
  @media (max-width: 45rem) {
    width: 20rem;
  }
`;

export const FilterList = styled.div`
  width: 10rem;
  text-align: center;
  p {
    margin-bottom: 2rem;
  }
`;

export const FilterElement = styled.div<StlyedProps>`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 5px;
  width: 6em;
  padding: 7px 10px;
  border-radius: 23px;
  background-color: ${({ state }) => (state ? "#A5A5FE" : "transparent")};
`;

export const NotFilter = styled.div`
  text-align: center;
  margin-top: 5rem;
  svg {
    transform: scaleX(-1);
  }
  p {
    font-size: 20px;
  }
`;

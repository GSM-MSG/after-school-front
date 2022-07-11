import styled from "@emotion/styled";

type StlyedProps = {
  state?: boolean;
  name?: string;
};

export const AfterSchool = styled.div`
  margin: 4rem 0 1rem;
  padding: 0 1rem;
`;

export const AfterSchoolBox = styled.div`
  background-color: #1e1e1c;
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
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  span {
    text-align: center;
    flex: 1;
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
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  p {
    text-align: center;
    flex: 1;
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
    transition: 0.2s cubic-bezier(0.23, 0.56, 0.68, 0.38);
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
  display: flex;
  justify-content: space-between;
  max-width: 40rem;
  width: 90%;
  margin: 0 auto;
`;

export const FilterList = styled.div`
  width: 10rem;
  text-align: center;
  p {
    margin-bottom: 2rem;
  }
`;

export const FilterElement = styled.div<StlyedProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 5px;
  width: 6em;
  padding: 7px 10px;
  border-radius: 23px;
  background: ${({ state }) => (state ? "#A5A5FE" : "transparent")};
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background: ${({ state }) => (state ? "#A5A5FE" : "#a5a5fe38")};
  }
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

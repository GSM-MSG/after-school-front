import styled from "@emotion/styled";

type StateType = {
  active: boolean;
};

export const Wrapper = styled.div`
  margin-top: 5rem;
  width: auto;
`;

export const Title = styled.h1`
  margin-top: 8rem;
  text-align: center;
`;

export const Layout = styled.div`
  margin-top: 3rem;
  height: 250px;
  width: 250px;
`;

export const GraphWrapper = styled.div`
  width: auto;
  display: flex;
  margin-top: 7rem;
  justify-content: space-around;
  @media (max-width: 1473px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GraphBox = styled.div`
  background: #2c2c2c;
  width: 30rem;
  height: 34rem;
  border-radius: 10px;
  h2 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1473px) {
    width: 80%;
  }
  p {
    color: #9a9a9a;
  }
`;

export const GraphInformBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

type InformType = {
  color: string;
};

export const GraphInform = styled.p<InformType>`
  position: relative;
  ::after {
    content: "";
    width: 25px;
    height: 25px;
    background-color: ${(prop) => prop.color};
    border-radius: 50%;
    position: absolute;
    top: -2px;
    left: -40px;
  }
`;

export const ListWrapper = styled.div`
  width: 70rem;
  height: 34rem;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  @media (max-width: 1697px) {
    width: 66vw;
  }
  @media (max-width: 1473px) {
    width: 80%;
    margin-top: 5rem;
  }
`;

export const ListTitle = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  span {
    width: 177px;
    padding: 20px 0;
    font-size: 1.2rem;

    :first-of-type {
      width: 384px;
      margin-left: 2rem;
    }
  }
`;

export const ListBox = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.div<StateType>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${(prop) => (prop.active ? "#A5A5FE" : "#343434")};
  border-radius: 10px;
  span {
    color: ${(prop) => (prop.active ? "#FCFFFF" : "#9a9a9a")};
    width: 177px;
    padding: 20px 0;
    font-size: 1.2rem;
    :first-of-type {
      width: 384px;
      margin-left: 2rem;
    }
    transition: 0.6s;
  }
  transition: 0.3s;
`;

type StyledProps = {
  value: number;
  append: number;
};
export const Progress = styled.div<StyledProps>`
  position: relative;
  width: 250px;
  height: 250px;
  background: ${(props) => {
    return (
      "conic-gradient(#4d5bf9 " +
      props.value * 3.6 +
      "deg, #FFFFFF " +
      props.value * 3.6 +
      "deg)"
    );
  }};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "${(props) => props.append}명 신청함";
    position: absolute;
    width: 84%;
    height: 84%;
    background: #2c2c2c;

    color: #fff;
    border-radius: 50%;
    font-size: 25px;
    text-align: center;
    line-height: 800%;
  }
`;

export const WeekBox = styled.div`
  position: absolute;
  top: -2rem;
  right: 10px;
`;

export const Week = styled.button<StateType>`
  color: ${(prop) => (prop.active ? "#535AFF" : "#FFFFFF")};
  padding-bottom: 2px;
  margin: 0 5px;
  border: none;
  font-size: 1.2rem;
  background-color: transparent;
  border-bottom: 2px solid
    ${(prop) => (prop.active ? "#535AFF" : "transparent")};
  transition: 0.2s;
`;

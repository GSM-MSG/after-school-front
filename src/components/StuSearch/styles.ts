import styled from "@emotion/styled";

type CheckButtonType = {
  state: boolean;
};

export const bg = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 0, 0.6);
  backdrop-filter: Blur(2px);
`;

export const Wrapper = styled.div`
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37.375rem;
  height: 41.875rem;
  background: #1e1e1c;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Search = styled.div`
  width: 32rem;
  height: 4rem;
  margin: 0 auto;
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
export const ListBox = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

export const userBox = styled.div`
  margin: 2rem auto;
  width: 23vw;
  height: 120px;
  background: #fff;
  border-radius: 5px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  img {
    height: 75%;
    border-radius: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  p {
    font-size: 20px;
    margin: 0;
  }
`;

export const Choose = styled.div<CheckButtonType>`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 25rem;
    height: 3rem;
    background-color: ${({ state }) => (state ? "#4C53FF" : "#A3A3A3")};
    border-radius: 6px;
    color: ${({ state }) => (state ? "#FCFFFF" : "#8C8A8A")};
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }
`;

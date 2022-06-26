import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;
export const DeleteInform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: #1e1e1c;

  div {
    display: flex;
    justify-content: space-between;
    width: 85%;
    height: 2rem;
    align-items: center;
    border-bottom: 1px solid #646464;
    p {
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Noto Sans;
  font-size: 30px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  margin: 5px auto;
  color: #fff;
`;

export const ListContainer = styled.div`
  margin-top: 110px;
  width: auto;
  margin-bottom: 9rem;

  ul {
    padding: 0;
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3.5vw 4vw;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr 1fr;
      gap: 3.5vw 3vw;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
`;

export const ListWrapper = styled.li`
  width: 23vw;
  height: 120px;
  background: #fff;
  border-radius: 5px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  @media (max-width: 1300px) {
    width: 36vw;
  }
  @media (max-width: 800px) {
    width: 50vw;
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

  button {
    width: 82px;
    height: 54px;
    background: #ed6666;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    cursor: pointer;
  }
`;

export const UserImg = styled.img`
  object-fit: corver;
  height: 75%;
  border-radius: 100%;
`;

export const Inform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 7rem;
  position: fixed;
  bottom: 0;
  background-color: #1e1e1c;
  button {
    cursor: pointer;
    width: 35rem;
    height: 3.5rem;
    border-radius: 10px;
    background-color: #4c53ff;
    color: #ffffff;
    font-size: 1.2rem;
    border: none;
    margin-top: 0.5rem;
  }
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  overflow: auto;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  position: fixed;
  background-color: #1e1e1c;
  padding-bottom: 65px;
`;

export const Title = styled.h1`
  font-family: Noto Sans;
  font-size: 30px;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`;

export const InputWrapper = styled.div`
  border-bottom: 2px solid #fff;
  display: flex;
  align-items: center;
  padding-right: 5px;

  input {
    width: 35vw;
    border: none;
    background: transparent;
    padding: 14px 35px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 29px;
    color: #fff;
    margin-right: -30px;
    text-align: center;

    @media (max-width: 1300px) {
      width: 450px;
    }

    ::placeholder {
      position: relative;
    }
    :focus {
      outline: none;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 210px;
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
  height: 100px;
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
    width: auto;
    font-size: 20px;
    margin: 0;
  }

  button {
    width: 82px;
    height: 54px;
    background: #5959ff;
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

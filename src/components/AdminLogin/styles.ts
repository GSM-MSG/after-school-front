import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 630px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.p`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 5rem;
`;

export const LoginWrapper = styled.div`
  width: 40%;
  height: 100%;
  background: #fcffff;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 630px) {
    border-top-left-radius: 60px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 60px;
    width: 100%;
  }
  svg {
    margin-top: 8rem;
  }
`;

export const LoginTitle = styled.p`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 600;
  color: #000000;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const LoginInput = styled.input`
  width: 600px;
  height: 20px;
  padding: 30px;
  border-radius: 18px;
  color: #bdbdbd;
  border: 1px solid #1e1e1c;
  font-size: 0.9rem;
  background-color: transparent;
  letter-spacing: 0.1px;
  word-spacing: 0.2rem;
  margin-top: 2.5rem;
  :focus {
    color: #1e1e1c;
  }
  @media (max-width: 1700px) {
    width: 35vw;
  }
  @media (max-width: 630px) {
    width: 82vw;
  }
`;

export const LoginButton = styled.button`
  width: 600px;
  height: 60px;
  border: none;
  background: #4c53ff;
  border-radius: 18px;
  font-size: 22px;
  color: #fcffff;
  margin-top: 5rem;
  cursor: pointer;
  @media (max-width: 1700px) {
    width: 35vw;
  }
  @media (max-width: 630px) {
    width: 82vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
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
    transition: 1s cubic-bezier(0.23, 0.56, 0.68, 0.38);
  }
`;

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

export const LoginButton = styled.button`
  width: 30rem;
  height: 4rem;
  border: none;
  background: #4c53ff;
  border-radius: 15px;
  font-size: 22px;
  color: #fcffff;
  margin-top: 5rem;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgb(102, 102, 102);

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

export const OauthButton = styled.a`
  margin-top: 5rem;
  width: 30rem;
  height: 4rem;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2rem 1rem;
  box-shadow: 0px 0px 10px rgb(102, 102, 102);
  svg {
    height: 2rem;
    width: 2rem;
    margin: 10px;
  }
  @media (max-width: 1700px) {
    width: 35vw;
  }
  @media (max-width: 630px) {
    width: 82vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const LoginText = styled.div`
  color: #000;
  font-size: 1.3rem;
`;

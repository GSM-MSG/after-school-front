import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  height: 80%;
  width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 40rem) {
    width: 80%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const OauthButton = styled.a`
  max-width: 30rem;
  max-height: 4rem;
  width: 90%;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2rem 1rem;

  svg {
    height: 2rem;
    width: 2rem;
    margin-right: 1.5rem;
  }
`;

export const LoginText = styled.div`
  color: #000;
  font-size: 1.3rem;
`;

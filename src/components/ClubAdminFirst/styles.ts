import styled from "@emotion/styled";

type ButtonColor = {
  color: string;
};

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

  @media (max-width: 40rem) {
    width: 80%;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7.5rem;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Button = styled.a<ButtonColor>`
  max-width: 30rem;
  max-height: 4rem;
  width: 90%;
  background: ${(prop) => prop.color};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2rem 1rem;
  margin-top: 2rem;
`;

export const LoginText = styled.div<ButtonColor>`
  color: ${(prop) => prop.color};
  font-size: 1.3rem;
`;

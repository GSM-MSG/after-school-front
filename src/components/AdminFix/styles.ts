import styled from "@emotion/styled";

export const bg = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 0, 0.6);
  backdrop-filter: Blur(2px);
`;

export const box = styled.div`
  width: 55rem;
  height: 50rem;
  background: #1e1e1c;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 300;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 75rem) {
    width: 73vw;
  }
  animation: fadeInDown 0.5s;
  @keyframes fadeInDown {
    0% {
      opacity: calc(0);
    }
  }
`;

export const title = styled.h1`
  margin-top: 3rem;
`;

export const afterSchoolType = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface ChangrButtonTypeProps {
  active: boolean;
  position?: "left" | "right";
}

export const ChangrButton = styled.button<ChangrButtonTypeProps>`
  border: none;
  ${(props) =>
    props.position &&
    `
    border-top-${props.position}-radius: 0.5rem;
    border-bottom-${props.position}-radius: 0.5rem;
    `}
  background: #A3A3A3;
  color: #8c8a8a;

  ${(props) =>
    props.active &&
    `
    background: #F4F4F4;
    color: #1C1C1E;
    `}
  width: 100%;
  height: 4rem;
  white-space: nowrap;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.2s;
`;

export const lectureTitle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const lectureInput = styled.input`
  height: 4rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  background: #1e1e1c;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 100;
  :focus {
    outline: none;
  }
`;
export const dayAndGrade = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const day = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
`;
export const grade = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
`;
export const checkOverlap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 645px) {
    display: flex;
    flex-direction: column;
  }
`;

export const submit = styled.input`
  margin-top: 6rem;
  width: 60%;
  height: 4rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: bolder;
  color: #fff;
  border: none;
  background: #4c53ff;
`;

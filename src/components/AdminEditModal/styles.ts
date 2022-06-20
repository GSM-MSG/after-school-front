import styled from "@emotion/styled";

export const ModifyLayout = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animate 0.5s;

  @keyframes animate {
    0% {
      opacity: 0;
      margin-top: -100px;
      height: calc(100vh + 100px);
    }
    100% {
      opacity: 1;
      margin-bottom: 0px;
      height: 100vh;
    }
  }
`;

export const ModifyBox = styled.div`
  position: fixed;
  width: 700px;
  height: 880px;
  background: #1e1e1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
  padding: 20px 98px;
  transition: width 0.5s, height 0s, gap 0s;
  gap: 30px;
`;

export const ProfileImg = styled.img`
  border-radius: 100%;
  width: 100px;
`;

export const DoneBtn = styled.button`
  color: #fff;
  background: #4c53ff;
  width: 70%;
  border: none;
  height: 60px;
  border-radius: 10px;
  gap: 30px;
  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
  cursor: pointer;
`;

export const ClubBanner = styled.img`
  width: 500px;
  height: 200px;
  object-fit: contain;
`;

export const ClubName = styled.p`
  width: 270px;
  height: 30px;
  line-height: 30px;
  background: #5169e8;
  text-align: center;
  border-radius: 10px;
  border-top-right-radius: 0;
`;

export const InformBox = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const InPutmBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  label {
    display: flex;
    flex-direction: column;
  }
`;

export const ModifyInput = styled.input`
  background: none;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 22px;
  height: 3rem;
  :focus {
    outline: none;
  }
`;
export const FindBtn = styled.button`
  color: #fff;
  background: #5959ff;
  width: 100px;
  height: 3rem;
  border-radius: 5px;
  border: none;
  position: absolute;
  right: 15%;
  cursor: pointer;
`;

export const bg = styled.div`
  z-index: 200;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 0, 0.6);
  backdrop-filter: Blur(2px);
`;

export const errorBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35rem;
  height: 22rem;
  background: #fcffff;
  display: flex;
  flex: 4 4 2;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  h2 {
    color: #ff8181;
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    color: #000000;
    text-align: center;
    font-size: 1.5rem;
    font-size: 400;
  }
  button {
    width: 100%;
    height: 4.4rem;
    border: none;
    background: #4c53ff;
    color: #fcffff;
    font-size: 1.2rem;
    font-weight: 600;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
  }
`;

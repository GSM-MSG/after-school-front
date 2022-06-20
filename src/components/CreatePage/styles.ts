import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const BannerImg = styled.div`
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const BannerView = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  background-position: center;
  cursor: pointer;
`;

export const Comment = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #646464;
  text-align: center;
  margin-bottom: 0;
`;

export const Description = styled.div`
  color: #646464;
`;

export const Forms = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5rem 5rem 0;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem 0;
  }
`;

export const ButtonCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 4rem 0 2rem;
  padding: 0 5%;
`;

export const SubmitButton = styled.button`
  height: 3.5rem;
  max-width: 30rem;
  width: 80%;
  background: #4c53ff;
  border: none;
  border-radius: 1rem;
  outline: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(76, 83, 255, 50%);
`;

export const EditButton = styled.button`
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  color: #fff;
  background: #4c53ff;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  width: 15rem;
  height: 3.5rem;
  transition: 0.2s;

  :hover {
    filter: brightness(80%);
  }
`;

export const BoomButton = styled.button`
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: #ff8181;
  color: #fff;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  width: 15rem;
  height: 3.5rem;
  transition: 0.2s;

  :hover {
    filter: brightness(80%);
  }
`;

//-------------------LeftForm--------------------

export const LeftFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  @media (max-width: 1100px) {
    text-align: center;
  }
`;

export const Choice = styled.span`
  color: #646464;
  margin-left: 0.7rem;
  font-size: 1rem;
`;

export const TitleInput = styled.input`
  background: none;
  border: #fff solid 0.2rem;
  border-radius: 0.5rem;
  padding: 0.7rem 1rem;
  color: #fff;
  font-size: 1.2rem;
  font-family: inherit;
  outline: none;
  max-width: 25rem;
  width: 90%;
`;

export const Users = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 7rem;
    height: 7rem;
  }
`;

export const UserImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  object-fit: cover;
`;

export const Textarea = styled.textarea`
  resize: none;
  max-width: 25rem;
  width: 90%;
  height: 10rem;
  background: none;
  border-radius: 0.5rem;
  border: 1px solid #fff;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  padding: 1rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LinkTitle = styled.h3``;

export const Link = styled.input`
  max-width: 30rem;
  width: 90%;
  height: 3.5rem;
  background: #fff;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.7rem;
  border: none;
`;

//------------------RightPage-------------------

export const RightFormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;

  @media (max-width: 1100px) {
    text-align: center;
  }
`;

export const Imgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  border-radius: 1rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  cursor: pointer;
`;

export const ImgAddBox = styled.div`
  background: #c4c4c4;
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  flex-direction: column;
  cursor: pointer;
`;

export const ImgAddComment = styled.p`
  color: #00a8fe;
  margin-bottom: 0;
`;

interface ClubButtonProps {
  active: boolean;
  position?: "left" | "right";
}

export const ClubButton = styled.button<ClubButtonProps>`
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
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.2s;
`;

export const InfoInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  width: 80%;
  max-width: 20rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  text-align: center;

  ::placeholder {
    text-align: center;
  }
`;

//----------------popup--------------------------

const BackgroundAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const PopupBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const PopupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Popup = styled.div`
  background: #1e1e1c;
  width: 80%;
  height: 70%;
  max-width: 30rem;
  max-height: 40rem;
  border-radius: 1rem;
  animation-name: ${BackgroundAnimation};
  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

export const PopupTitle = styled.h2`
  text-align: center;
`;

export const SearchBar = styled.div`
  width: 90%;
  height: 3rem;
  border: 1px solid #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  flex: 1;
  background: none;
  padding: 0 1rem;
  color: #fff;
  font-size: 1.1rem;
  font-family: inherit;
`;

export const PopupUsers = styled.div`
  flex: 1;
  padding: 0.5rem 0;
  width: 100%;
  overflow: auto;
`;

export const PopupUser = styled.div<{ isHave: boolean }>`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 2rem;
  ${({ isHave }) => isHave && "filter: brightness(30%);"}
`;

export const AddUserImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;

  h3 {
    margin: 0;
  }
`;

export const CheckBox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;

export const PopupButton = styled.button`
  width: 100%;
  background: #4c54ff;
  color: #fff;
  border: none;
  outline: none;
  height: 3rem;
  font-size: 1.3rem;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  transition: 0.2s;

  :hover {
    background: #434cfa;
  }
`;

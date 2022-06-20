import styled from "@emotion/styled";

export const UsersWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Hr = styled.hr`
  border: 1px solid #646464;
  max-width: 30rem;
  width: 90%;
`;

export const CardList = styled.div`
  margin: 5rem 0 2rem 0;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: #ff8181;
  width: 20rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.2s;

  :hover {
    filter: brightness(80%);
  }
`;

//---------------------ApplicationCard | MemberCard--------------------

export const MemberWrapper = styled.div`
  width: 20rem;
  height: 12rem;
  background: #fdfdfd;
  position: relative;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding-top: 2.5rem;
  color: #000;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 100%;
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Name = styled.h2`
  color: #000;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Approve = styled.button`
  flex: 1;
  border: none;
  padding: 0.5rem 0;
  border-bottom-left-radius: 0.4rem;
  background: #4c53ff;
  color: #fff;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  outline: none;

  :hover {
    background: #3a41f9;
  }
`;

export const Refuse = styled.button`
  flex: 1;
  border: none;
  padding: 0.5rem 0;
  border-bottom-right-radius: 0.4rem;
  background: #646464;
  color: #ff8181;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  outline: none;

  :hover {
    background: #4c4c4c;
  }
`;

//------------------UserCard-----------------

export const UserCardWrapper = styled.div`
  width: 20rem;
  height: 12rem;
  background: #fdfdfd;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const UserCardImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.h3`
  margin: 0;
`;

export const UserData = styled.p`
  margin: 0;
`;

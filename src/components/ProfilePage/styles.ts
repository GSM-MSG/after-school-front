import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 4rem;
  min-height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: left;
  width: 80%;
  max-width: 70rem;
`;

export const Main = styled.div`
  flex: 1;
  width: 80%;
  height: auto;
  max-width: 70rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: #1e1e1c;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 2rem;
    width: 90%;
  }
`;

export const User = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const UserImgWrapper = styled.span`
  position: relative;
`;

export const EditButton = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 100%;
`;
export const SubUserInfo = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const Logout = styled.p`
  color: #ff8181;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 570px) {
    position: static;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #646464;
  width: 100%;
`;

export const Clubs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TitleClubs = styled.div``;

export const ClubTitle = styled.h2`
  width: 100%;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

export const Combine = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

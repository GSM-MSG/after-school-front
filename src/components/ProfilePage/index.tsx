/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../Card";
import * as S from "./styles";
import { Global } from "@emotion/react";
import api from "../../lib/api";
import { MyPageType } from "../../types";
import checkQuery from "../../lib/checkQuery";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface ProfilePageProps {
  username: string;
  user: MyPageType;
}

export default function ProfilePage({ username, user }: ProfilePageProps) {
  const router = useRouter();
  const Logout = async () => {
    try {
      await checkQuery(async () => api.post("/auth/web/logout"));
      router.push("/login");
    } catch (e) {
      toast.error("로그아웃 실패");
    }
  };

  return (
    <>
      <Global
        styles={{
          body: {
            background: "#000",
          },
        }}
      />
      <S.Wrapper>
        <S.Title>프로필</S.Title>
        <S.Main>
          <S.User>
            <S.UserImgWrapper>
              <S.UserImg src={user.userData.userImg} />
              {/* <S.EditButton> */}
              {/*   <SVG.Pen /> */}
              {/* </S.EditButton> */}
            </S.UserImgWrapper>
            <h1>{username}</h1>
            <h3>{user.userData.email}</h3>
            <S.Logout onClick={Logout}>로그아웃</S.Logout>
          </S.User>
          <S.Hr />
          {user.clubs[0] && <h2>내 동아리</h2>}
          <S.Clubs>
            {user.clubs.filter((i) => i.type === "EDITORIAL")[0] && (
              <S.TitleClubs>
                <S.ClubTitle>사설 동아리</S.ClubTitle>
                <S.Cards>
                  {user.clubs
                    .filter((i) => i.type === "EDITORIAL")
                    .map((i) => (
                      <Card key={i.id} club={i} />
                    ))}
                </S.Cards>
              </S.TitleClubs>
            )}
            <S.Combine>
              {user.clubs.filter((i) => i.type === "MAJOR")[0] && (
                <div>
                  <S.ClubTitle>전공 동아리</S.ClubTitle>
                  <S.Cards>
                    {user.clubs
                      .filter((i) => i.type === "MAJOR")
                      .map((i) => (
                        <Card key={i.id} club={i} />
                      ))}
                  </S.Cards>
                </div>
              )}
              {user.clubs.filter((i) => i.type === "FREEDOM")[0] && (
                <div>
                  <S.ClubTitle>자율 동아리</S.ClubTitle>
                  <S.Cards>
                    {user.clubs
                      .filter((i) => i.type === "FREEDOM")
                      .map((i) => (
                        <Card key={i.id} club={i} />
                      ))}
                  </S.Cards>
                </div>
              )}
            </S.Combine>
          </S.Clubs>
        </S.Main>
      </S.Wrapper>
    </>
  );
}

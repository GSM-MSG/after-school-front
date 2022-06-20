import { NextPage } from "next";
import { Member } from "../../types/MemberType";
import * as S from "./styles";

interface UserCardProps {
  user: Member;
}

const UserCard: NextPage<UserCardProps> = ({ user }) => {
  if (!user) return <></>;
  return (
    <S.UserCardWrapper>
      <S.UserCardImg src={user.userImg} />
      <S.UserInfo>
        <S.UserName>{user.name}</S.UserName>
        <S.UserData>
          {user.grade}학년 {user.class}반 {user.num}번
        </S.UserData>
      </S.UserInfo>
    </S.UserCardWrapper>
  );
};

export default UserCard;

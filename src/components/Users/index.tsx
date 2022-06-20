import { useState } from "react";
import * as S from "./styles";
import MemberCard from "./MemberCard";
import { MemberType } from "../../types/MemberType";
import { NextPage } from "next";
import UserCard from "./UserCard";
import Header from "../Header";
import checkQuery from "../../lib/checkQuery";
import api from "../../lib/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface UsersProps {
  users: MemberType;
  type: "MANAGE" | "APPLICATION";
}

const Users: NextPage<UsersProps> = ({ users, type }) => {
  const router = useRouter();
  const [member, setMember] = useState<MemberType>(users);

  const urlArray = router.asPath.split("/");

  const onClick = async () => {
    try {
      await checkQuery(async () =>
        api.put("/club/web/close", {
          q: decodeURI(urlArray[2]),
          type: urlArray[1].toUpperCase(),
        })
      );

      toast.success("동아리 마감에 성공했습니다.");
      router.push(`/${urlArray[1]}/${urlArray[2]}`);
    } catch (e) {
      toast.error("동아리 마감에 실패했습니다.");
    }
  };

  return (
    <>
      <Header />
      <S.UsersWrapper>
        <S.Title>
          {type === "MANAGE" ? "구성원 관리" : "신청자 명단 관리"}
        </S.Title>

        {users.userScope === "HEAD" && member !== undefined ? (
          <>
            <S.CardList>
              <UserCard
                user={
                  member.requestUser?.filter((user) => user.scope === "HEAD")[0]
                }
              />
              {member.requestUser
                ?.filter((user) => user.scope !== "HEAD")
                ?.map((user) => (
                  <MemberCard
                    key={user.email}
                    member={member}
                    setMember={setMember}
                    user={user}
                    type={type}
                  />
                ))}
            </S.CardList>
            {type === "APPLICATION" && (
              <S.ButtonWrapper>
                <S.CloseButton onClick={onClick}>신청 마감하기</S.CloseButton>
              </S.ButtonWrapper>
            )}
          </>
        ) : (
          <S.CardList>
            {member?.requestUser.map((user) => (
              <UserCard key={user.email} user={user} />
            ))}
          </S.CardList>
        )}
      </S.UsersWrapper>
    </>
  );
};

export default Users;

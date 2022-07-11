import { NextPage } from "next";
import * as S from "./styles";
import { useState } from "react";
import { ApplyUserType } from "../../types";
import produce from "immer";
import { toast } from "react-toastify";
import checkQuery from "../../lib/checkQuery";
import { useRouter } from "next/router";
import admin from "../../lib/admin";

interface AdminStuListProps {
  data: ApplyUserType[];
}

const AdminStuList: NextPage<AdminStuListProps> = ({ data }) => {
  const [users, setUsers] = useState<ApplyUserType[]>(data);
  const router = useRouter();

  const onDelete = async (email: string) => {
    try {
      await checkQuery(async () =>
        admin.patch(`/afterschool/users/${router.query.afterSchoolIdx}`, {
          email,
        })
      );

      setUsers(
        produce(users, (draft) => {
          return draft.filter((i) => i.email !== email);
        })
      );

      toast.success("유저 삭제에 성공했습니다");
    } catch (e) {
      toast.error("유저 삭제에 실패했습니다");
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.DeleteInform>
          <S.Title>학생정보 수정</S.Title>
          <div>
            <p>요일</p>
            <p>{users.length}명</p>
          </div>
        </S.DeleteInform>
        <S.ListContainer>
          <ul>
            {users.map((item, idx) => (
              <S.ListWrapper key={idx}>
                <S.UserImg src={item.userImg} />
                <div>
                  <p>{item.name}</p>
                  <p>{`${item.grade}학년 ${item.class}반 ${item.num}번`}</p>
                </div>
                <button onClick={() => onDelete(item.email)}>삭제</button>
              </S.ListWrapper>
            ))}
          </ul>
        </S.ListContainer>
      </S.Wrapper>
    </>
  );
};

export default AdminStuList;

import { NextPage } from "next";
import * as S from "./styles";
import { useState } from "react";
import { ApplyUserType } from "../../types";
import produce from "immer";
import { toast } from "react-toastify";
import checkQuery from "../../lib/checkQuery";
import api from "../../lib/api";
import { useRouter } from "next/router";

interface AdminStuListProps {
  data: ApplyUserType[];
}

const AdminStuList: NextPage<AdminStuListProps> = ({ data }) => {
  const [users, setUsers] = useState<ApplyUserType[]>(data);
  const router = useRouter();

  const onDelete = async (email: string) => {
    try {
      await checkQuery(() =>
        api.patch(`/afterSchool/users/${router.query.afterSchoolIdx}`)
      );

      setUsers(
        produce(users, (draft) => {
          draft = draft.filter((i) => i.email !== email);
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
            <p>월요일</p>
            <p>30명</p>
          </div>
        </S.DeleteInform>
        <S.ListContainer>
          <ul>
            {users.map((item, idx) => (
              <S.ListWrapper key={idx}>
                <img src={item.userImg} />
                <div>
                  <p>{item.name}</p>
                  <p>{`${item.grade}학년 ${item.class_}반 ${item.num}번`}</p>
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

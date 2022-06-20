import * as S from "./styles";
import { useState } from "react";
import { userData } from "./DummyData";
import { StuSearch } from "../StuSearch";

export default function AdminStuList() {
  //멤버 추가하기 모달 관리 state
  const [searchTurn, setSearchTurn] = useState<boolean>(false);

  type userDumyDataType = {
    name: string;
    grade: number;
    class: number;
    num: number;
    img: string;
    club: string;
    role: string;
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
            {userData.map((item: userDumyDataType, idx: number) => (
              <S.ListWrapper key={idx}>
                <img src={item.img} />
                <div>
                  <p>{item.name}</p>
                  <p>
                    {item.grade +
                      "학년 " +
                      item.class +
                      "반 " +
                      item.num +
                      "번"}
                  </p>
                </div>
                <button>삭제</button>
              </S.ListWrapper>
            ))}
          </ul>
        </S.ListContainer>
      </S.Wrapper>
      <S.Inform>
        <button onClick={() => setSearchTurn(true)}>멤버 추가하기</button>
      </S.Inform>
      {searchTurn && <StuSearch setSearchTurn={setSearchTurn} />}
    </>
  );
}

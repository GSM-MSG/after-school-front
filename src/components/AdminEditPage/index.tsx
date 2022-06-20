import * as S from "./styles";
import * as SVG from "../../SVG";
import { useState } from "react";
import { userData } from "./DummyData";
import AdminEditModal from "../AdminEditModal";

export default function AdminEdit() {
  type userDumyDataType = {
    name: string;
    grade: number;
    class: number;
    num: number;
    img: string;
    club: string;
    role: string;
  };
  const [userList, setUserList] = useState<Array<userDumyDataType>>(userData);
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<userDumyDataType>({
    name: "",
    grade: 0,
    class: 0,
    num: 0,
    img: "",
    club: "",
    role: "",
  });
  const [modal, setModal] = useState(false);
  const onList = () => {
    return userList
      .filter((item: userDumyDataType) => {
        const stuNum: string =
          item.grade + "학년" + item.class + "반" + item.num + "번";
        if (
          search === "" ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          stuNum.includes(search.replace(/\s/gi, ""))
        ) {
          return item;
        }
      })
      .map((item: userDumyDataType, idx: number) => (
        <S.ListWrapper key={idx}>
          <img src={item.img} />
          <div>
            <p>{item.name}</p>
            <p>{item.grade + "학년 " + item.class + "반 " + item.num + "번"}</p>
          </div>
          <button
            onClick={() => {
              setUser(item);
              setModal(true);
            }}
          >
            수정
          </button>
        </S.ListWrapper>
      ));
  };

  return (
    <S.Wrapper>
      <S.InputContainer>
        <S.Title>학생정보 수정</S.Title>
        <S.InputWrapper>
          <input
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SVG.SearchIcon />
        </S.InputWrapper>
      </S.InputContainer>
      <S.ListContainer>
        <ul>{onList()}</ul>
      </S.ListContainer>
      {modal && <AdminEditModal item={user} onClose={setModal} />}
    </S.Wrapper>
  );
}

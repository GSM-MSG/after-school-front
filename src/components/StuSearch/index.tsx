import * as S from "./styles";
import { userData } from "./DummyData";
import * as SVG from "../../SVG";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function StuSearch({
  setSearchTurn,
}: {
  setSearchTurn: Dispatch<SetStateAction<boolean>>;
}) {
  type afterDummyDaya = {
    name: string;
    grade: number;
    class: number;
    num: number;
    img: string;
    club: string;
    role: string;
  };
  const [search, setSearch] = useState<string>("");
  const [afterList, setAfterList] = useState<afterDummyDaya[]>([]);
  const [stuInform, setStuInform] = useState<afterDummyDaya>();
  const [selectCheck, setSelectCheck] = useState<boolean>(false);
  const ChangeAfterList = () => {
    if (search === "") {
      return setAfterList(userData);
    } else {
      const MakeList = userData.filter((e) => e.name.includes(search));
      return setAfterList(MakeList);
    }
  };
  useEffect(() => {
    ChangeAfterList();
  }, [search]);

  console.log(stuInform);
  return (
    <>
      <S.Wrapper>
        <S.Title>학생조회</S.Title>
        <S.Search>
          <S.Input
            type="text"
            name="search"
            placeholder="검색어를 입력하세요."
            autoComplete="off"
            value={search}
            onChange={(e: { target: HTMLInputElement }) => {
              setSearch(e.target.value);
              setSelectCheck(false);
            }}
          />
          <i onClick={() => ChangeAfterList()}>
            <SVG.SearchIcon />
          </i>
        </S.Search>
        <S.ListBox>
          {afterList.map((e, index) => {
            return (
              <S.userBox
                onClick={() => {
                  setStuInform(e);
                  setSelectCheck(true);
                }}
                key={index}
              >
                <img src={e.img} />
                <div>
                  <p>{e.name}</p>
                  <p>{e.grade + "학년 " + e.class + "반 " + e.num + "번"}</p>
                </div>
              </S.userBox>
            );
          })}
        </S.ListBox>
        <S.Choose state={selectCheck} onClick={() => setSearchTurn(false)}>
          <button>선택</button>
        </S.Choose>
      </S.Wrapper>
      <S.bg onClick={() => setSearchTurn(false)} />
    </>
  );
}

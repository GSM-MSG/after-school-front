import React, { useState, Dispatch, SetStateAction } from "react";
import * as S from "./styles";
import * as Type from "../../types/AfterSchoolType";
import * as SVG from "../../SVG";
import SelectButton from "../../components/SelectButton";
import { AdminFix } from "../../components/AdminFix";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Link from "next/link";
import SelectSeason from "../../components/SelectSeason";
import { useRouter } from "next/router";
import { WeekKorean } from "../../lib/WeekKorean";
import checkQuery from "../../lib/checkQuery";
import { toast } from "react-toastify";
import { NextPage } from "next";
import { FixAfterSchool, WeekType } from "../../types";
import produce from "immer";
import { Week } from "../../lib/Week";
import admin from "../../lib/admin";

interface AdminAfterSchoolProps {
  afterSchools: Type.PropListType[];
  setAfterSchools: Dispatch<SetStateAction<Type.PropListType[]>>;
}

const AdminAfterSchool: NextPage<AdminAfterSchoolProps> = ({
  afterSchools,
  setAfterSchools,
}) => {
  //선택한 버튼의 상태 관리
  const [category, setCategory] = useState<number>();
  //요일 오브젝트
  const [day, setDay] = useState<WeekType | null>(null);
  //학년 오브젝트
  const [grade, setGrade] = useState<1 | 2 | 3 | null>(null);
  //필터 모달 관리 state
  const [filter, setFilter] = useState<boolean>(false);
  //검색 값 관리 state
  const [search, setSearch] = useState<string>("");
  //수정하기 모달 관리 state
  const [fix, setFix] = useState(false);
  //방과후ㅜ생성하기 모달 관리 state
  const [create, setCreate] = useState(false);
  //수정할 리스트 정보 관리 state
  const [fixState, setFixState] = useState<FixAfterSchool>({
    id: 0,
    title: "",
    week: ["MON"],
    grade: [1],
    teacher: "",
    season: "FIRST",
  });
  //신청 받기 마감 모달 관리 state
  const [allSelect, setAllSelect] = useState(false);

  const [type, setType] = useState<"open" | "close" | null>(null);

  const router = useRouter();

  const deleteAfterSchool = async (id: number) => {
    try {
      await checkQuery(async () => admin.delete(`afterschool/${id}`));

      setAfterSchools(afterSchools.filter((i) => i.id !== id));

      toast.success("방과후 삭제에 성공했습니다");
    } catch (e) {
      toast.error("방과후 삭제에 실패했습니다");
    }
  };

  const editAfterSchool = async (e: FixAfterSchool) => {
    setFix(true);
    setFixState(e);
  };

  const closeAndOpenAfterSchool = async (
    id: number,
    type: "open" | "close"
  ) => {
    try {
      await checkQuery(async () => admin.put(`afterschool/${type}/${id}`));

      setAfterSchools(
        produce(afterSchools, (draft) => {
          draft = draft.map((i) => {
            if (i.id === id)
              return {
                ...i,
                isOpend: type === "open",
              };
            return i;
          });
        })
      );

      toast.success(
        `방과후 ${type === "open" ? "오픈" : "마감"}에 성공했습니다`
      );
    } catch (e) {
      toast.error(
        `방과후 ${type === "open" ? "오픈" : "마감"}마감에 실패했습니다`
      );
    }
  };

  //번튼 생성 함수
  const makeSelectButton = (e: Type.PropListType) => {
    if (category === 0) {
      return (
        <S.SelectButton
          onClick={() =>
            editAfterSchool({
              id: e.id,
              title: e.title,
              week: e.dayOfWeek,
              grade: e.grade,
              teacher: e.teacher,
              season: e.season,
            })
          }
          color={"blue"}
        >
          수정하기
        </S.SelectButton>
      );
    } else if (category === 1) {
      return (
        <S.SelectButton onClick={() => deleteAfterSchool(e.id)} color={"red"}>
          삭제하기
        </S.SelectButton>
      );
    } else if (category === 2) {
      router.push("/admin/graph");
    } else if (category === 3) {
      return e.isOpened ? (
        <S.SelectButton
          onClick={() => closeAndOpenAfterSchool(e.id, "close")}
          color={"red"}
        >
          마감하기
        </S.SelectButton>
      ) : (
        <S.SelectButton
          onClick={() => closeAndOpenAfterSchool(e.id, "open")}
          color={"blue"}
        >
          신청받기
        </S.SelectButton>
      );
    } else {
      return (
        <Link href={`/admin/stulist/${e.id}`}>
          <S.SelectButton color={"blue"}>명단보기</S.SelectButton>
        </Link>
      );
    }
  };

  const onChangeGrade = (g: 1 | 2 | 3) => setGrade(grade === g ? null : g);
  const onChangeWeek = (week: WeekType) => setDay(day === week ? null : week);

  return (
    <S.AfterSchool>
      <S.Search>
        <S.Input
          type="text"
          name="search"
          placeholder="검색어를 입력하세요."
          autoComplete="off"
          value={search}
          onChange={(e: { target: HTMLInputElement }) => {
            setSearch(e.target.value);
          }}
        />
        <i>
          <SVG.SearchIcon />
        </i>
        <i onClick={() => setFilter(!filter)}>
          <SVG.SearchFilter />
        </i>
      </S.Search>
      {filter && (
        <S.FilterBox>
          <S.FilterList>
            <p>요일</p>
            {Array(...Array(3)).map((_, i) => (
              <S.FilterElement
                key={i}
                state={day === Week[i]}
                onClick={() => onChangeWeek(Week[i] as WeekType)}
              >
                {WeekKorean[Week[i] as WeekType] + "요일"}
              </S.FilterElement>
            ))}
          </S.FilterList>
          <S.FilterList>
            <p>대상학년</p>
            {Array(...Array(3)).map((_, i) => (
              <S.FilterElement
                key={i}
                state={grade === i + 1}
                name={`${i + 1}`}
                onClick={() => onChangeGrade((i + 1) as 1 | 2 | 3)}
              >
                {i + 1}학년
              </S.FilterElement>
            ))}
          </S.FilterList>
        </S.FilterBox>
      )}
      <S.AfterSchoolBox filter={`${filter}`}>
        <S.CurseList>
          <span>강좌</span>
          <span>강의시간</span>
          <span>대상학년</span>
        </S.CurseList>
        {category === 3 && (
          <S.AllButtonBox>
            <S.AllButton
              color="blue"
              onClick={() => {
                setAllSelect(true);
                setType("open");
              }}
            >
              전체 신청받기
            </S.AllButton>
            <S.AllButton
              color="red"
              onClick={() => {
                setAllSelect(true);
                setType("close");
              }}
            >
              전체 신청마감
            </S.AllButton>
          </S.AllButtonBox>
        )}
        <S.ScollBox>
          {afterSchools
            .filter((i) => i.title.includes(search))
            .filter((i) => (grade ? i.grade.includes(grade) : true))
            .filter((i) => (day ? i.dayOfWeek.includes(day as WeekType) : true))
            .map((e: Type.PropListType, i) => {
              return (
                <S.Enrolment key={i}>
                  <div>
                    <p>{e.title}</p>
                    <p>{e.dayOfWeek.map((i) => WeekKorean[i]).join(", ")}</p>
                    <p>{e.grade.join(", ")}</p>
                  </div>
                  {makeSelectButton(e)}
                </S.Enrolment>
              );
            })}
        </S.ScollBox>
      </S.AfterSchoolBox>
      <SelectButton setCategory={setCategory} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
      {fix && (
        <AdminFix
          setFix={setFix}
          setState={setFixState}
          state={fixState}
          afterSchools={afterSchools}
          setAfterSchools={setAfterSchools}
        />
      )}
      {allSelect && <SelectSeason setAllSelect={setAllSelect} type={type} />}
    </S.AfterSchool>
  );
};

export default AdminAfterSchool;

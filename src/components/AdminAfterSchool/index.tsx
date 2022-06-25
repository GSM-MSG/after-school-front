import React, { MouseEvent, useState } from "react";
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
import api from "../../lib/api";
import { toast } from "react-toastify";
import { NextPage } from "next";
import { FixAfterSchool } from "../../types";
import produce from "immer";

interface AdminAfterSchoolProps {
  data: Type.PropListType[];
}

const AdminAfterSchool: NextPage<AdminAfterSchoolProps> = ({ data }) => {
  const [afterSchools, setAfterSchools] = useState<Type.PropListType[]>(data);

  //요일 오브벡트 타입
  type FilterDayType = {
    day: "MON" | "TUE" | "WED";
    check: boolean;
  };
  //학년 오브젝트 타입
  type FilterGradeType = {
    grade: number;
    check: boolean;
  };
  //선택한 버튼의 상태 관리
  const [category, setCategory] = useState<number>();
  //요일 오브젝트
  const [day, setDay] = useState<FilterDayType[]>([
    {
      day: "MON",
      check: false,
    },
    {
      day: "TUE",
      check: false,
    },
    {
      day: "WED",
      check: false,
    },
  ]);
  //학년 오브젝트
  const [grade, setGrade] = useState<FilterGradeType[]>([
    {
      grade: 1,
      check: false,
    },
    {
      grade: 2,
      check: false,
    },
    {
      grade: 3,
      check: false,
    },
  ]);
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
    grade: 1,
    teacher: "",
    season: "FIRST",
  });
  //신청 받기 마감 모달 관리 state
  const [allSelect, setAllSelect] = useState(false);

  const router = useRouter();

  const deleteAfterSchool = async (id: number) => {
    try {
      await checkQuery(async () => api.delete(`afterSchool/${id}`));

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
      await checkQuery(async () => api.put(`afterSchool/${type}/${id}`));

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
              week: e.week,
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
      switch (e.isApplied) {
        case true:
          return (
            <S.SelectButton
              onClick={() => closeAndOpenAfterSchool(e.id, "close")}
              color={"red"}
            >
              마감하기
            </S.SelectButton>
          );
        case false:
          return (
            <S.SelectButton
              onClick={() => closeAndOpenAfterSchool(e.id, "open")}
              color={"blue"}
            >
              신청받기
            </S.SelectButton>
          );
        default:
          return;
      }
    } else {
      return (
        <Link href="/admin/stulist">
          <S.SelectButton color={"blue"}>명단보기</S.SelectButton>
        </Link>
      );
    }
  };
  //날짜 오브젝트 생성 함수
  const changeCheckDay = (e: MouseEvent) => {
    const findCheckIndex: number = day.findIndex(
      (element) =>
        WeekKorean[element.day] + "요일" ===
        (e.target as HTMLSpanElement).outerText
    );
    const newList = day.map((item, i) => {
      if (i === findCheckIndex) {
        const newItem = {
          day: item.day,
          check: !item.check ? true : false,
        };
        return newItem;
      } else if (item.check === true) {
        const newItem = {
          day: item.day,
          check: false,
        };
        return newItem;
      } else {
        return item;
      }
    });
    setDay(newList);
  };
  //요일 변경 함수
  const changeCheckGrade = (e: MouseEvent) => {
    const findCheckIndex: number = grade.findIndex(
      (element) =>
        element.grade === parseInt((e.target as HTMLSpanElement).outerText)
    );
    const newList = grade.map((item, i) => {
      if (i === findCheckIndex) {
        const newItem = {
          grade: item.grade,
          check: !item.check ? true : false,
        };
        return newItem;
      } else if (item.check === true) {
        const newItem = {
          grade: item.grade,
          check: false,
        };
        return newItem;
      } else {
        return item;
      }
    });
    setGrade(newList);
  };

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
            {day.map((e: FilterDayType, i) => {
              return (
                <S.FilterElement
                  key={i}
                  state={e.check}
                  onClick={changeCheckDay}
                >
                  {WeekKorean[e.day] + "요일"}
                </S.FilterElement>
              );
            })}
          </S.FilterList>
          <S.FilterList>
            <p>대상학년</p>
            {grade.map((e: FilterGradeType, i) => {
              return (
                <S.FilterElement
                  key={i}
                  state={e.check}
                  onClick={changeCheckGrade}
                >
                  {e.grade + "학년"}
                </S.FilterElement>
              );
            })}
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
            <S.AllButton color="blue" onClick={() => setAllSelect(true)}>
              전체 신청받기
            </S.AllButton>
            <S.AllButton color="red" onClick={() => setAllSelect(true)}>
              <SVG.UnderTryAngle />
              전체 신청마감
            </S.AllButton>
          </S.AllButtonBox>
        )}
        <S.ScollBox>
          {afterSchools.map((e: Type.PropListType, i) => {
            return (
              <S.Enrolment key={i}>
                <div>
                  <p>{e.title}</p>
                  <p>
                    {e.week.map((i, idx) =>
                      idx === 0 ? WeekKorean[i] : `, ${WeekKorean[i]}`
                    )}
                  </p>
                  <p>{e.grade}</p>
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
      {allSelect && <SelectSeason setAllSelect={setAllSelect} />}
    </S.AfterSchool>
  );
};

export default AdminAfterSchool;

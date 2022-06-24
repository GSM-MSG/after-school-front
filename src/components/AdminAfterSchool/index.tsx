import React, { MouseEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { list } from "./dummyData";
import * as Type from "../../types/AfterSchoolType";
import * as SVG from "../../SVG";
import SelectButton from "../../components/SelectButton";
import { AdminFix } from "../../components/AdminFix";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Link from "next/link";
import SelectSeason from "../../components/SelectSeason";
import { useRouter } from "next/router";

export default function AdminAfterSchool() {
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
  //검색||필터가 적용된 리스트
  const [afterList, setAfterList] = useState<Type.PropListType[]>([]);
  //수정하기 모달 관리 state
  const [fix, setFix] = useState(false);
  //방과후ㅜ생성하기 모달 관리 state
  const [create, setCreate] = useState(false);
  //수정할 리스트 정보 관리 state
  const [fixState, setFixState] = useState<Type.PropListType>({
    id: 0,
    title: "",
    week: ["MON"],
    grade: 0,
    isOpend: true,
    isApplied: true,
    isEnabled: true,
  });
  //신청 받기 마감 모달 관리 state
  const [allSelect, setAllSelect] = useState(false);

  const router = useRouter();

  //검색 리스트 생성 함수
  const ChangeAfterList = () => {
    if (search === "") {
      return list;
    } else {
      const MakeList = list.filter(
        (e) =>
          e.title.includes(search) ||
          `${e.grade}` === search ||
          `${e.grade}학년` === search ||
          changeWeek(e.week[0]).includes(search) ||
          `${changeWeek(e.week[0])}요일`.includes(search)
      );
      return MakeList;
    }
  };
  //번튼 생성 함수
  const makeSelectButton = (e: Type.PropListType) => {
    if (category === 0) {
      return (
        <S.SelectButton
          onClick={() => {
            setFix(true);
            setFixState(e);
          }}
          color={"blue"}
        >
          수정하기
        </S.SelectButton>
      );
    } else if (category === 1) {
      return (
        <S.SelectButton onClick={() => console.log("삭제하기")} color={"red"}>
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
              onClick={() => console.log("마감하기")}
              color={"red"}
            >
              마감하기
            </S.SelectButton>
          );
        case false:
          return (
            <S.SelectButton
              onClick={() => console.log("신청받기")}
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
  //요일 변경 함수

  const changeWeek: Type.ChangeWeekType = (e) => {
    switch (e) {
      case "MON":
        return "월";
      case "TUE":
        return "화";
      case "WED":
        return "수";
      default:
        console.error("Week Error");
        break;
    }
  };
  //날짜 오브젝트 생성 함수
  const changeCheckDay = (e: MouseEvent) => {
    const findCheckIndex: number = day.findIndex(
      (element) =>
        changeWeek(element.day) + "요일" ===
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
  //새 필터 생성 함수
  const MakeFilter = () => {
    const CheckDay = day.filter((e) => e.check === true);
    const CheckGrade = grade.filter((e) => e.check === true);

    let newList: Type.PropListType[] = [];

    if (CheckDay.length === 0 && CheckGrade.length === 0) {
      setAfterList(ChangeAfterList());
    } else if (CheckDay.length === 0 && CheckGrade.length === 1) {
      newList = list.filter((e) => e.grade === CheckGrade[0].grade);
      setAfterList(newList);
    } else if (CheckDay.length === 1 && CheckGrade.length === 0) {
      newList = list.filter((e) => e.week.includes(CheckDay[0].day));
      setAfterList(newList);
    } else if (CheckDay.length === 1 && CheckGrade.length === 1) {
      newList = list.filter(
        (e) =>
          e.week.includes(CheckDay[0].day) && e.grade === CheckGrade[0].grade
      );
      setAfterList(newList);
    }
  };

  //실시간검색 리스트 생성
  useEffect(() => {
    setAfterList(ChangeAfterList());
  }, [search]);
  //필터 변경체크
  useEffect(() => {
    MakeFilter();
  }, [grade, day]);

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
        <i onClick={ChangeAfterList}>
          <SVG.SearchIcon />
        </i>
        <i onClick={() => setFilter(!filter)}>
          <SVG.SearchFilter />
        </i>
      </S.Search>
      {filter ? (
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
                  {changeWeek(e.day) + "요일"}
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
      ) : (
        ""
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
          {afterList.map((e: Type.PropListType, i) => {
            return (
              <S.Enrolment key={i}>
                <div>
                  <p>{e.title}</p>
                  <p>{changeWeek(e.week[0])}</p>
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
      {fix && <AdminFix setFix={setFix} state={fixState} />}
      {allSelect && <SelectSeason setAllSelect={setAllSelect} />}
    </S.AfterSchool>
  );
}

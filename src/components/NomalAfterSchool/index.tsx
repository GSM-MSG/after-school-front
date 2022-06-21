import React, { MouseEvent, useEffect, useState } from "react";
import * as S from "./style";
import { list } from "./dummyData";
import * as Type from "../../types/AfterSchoolType";
import * as SVG from "../../SVG";

export default function NomalAfterSchool() {
  //요일 오브젝트 타입
  type FilterDayType = {
    day: "MON" | "TUE" | "WED";
    check: boolean;
  };

  //학년 오브젝트 타입
  type FilterGradeType = {
    grade: number;
    check: boolean;
  };

  //요일 오브젝트
  const [filterWeek, setFilterWeek] = useState<FilterDayType[]>([
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
  const [filterGrade, setGrade] = useState<FilterGradeType[]>([
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

  //검색 리스트 생성 함수
  const ChangeAfterList = () => {
    if (search === "") {
      return [];
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
    if (e.isApplied && e.isOpend) {
      return <S.SelectButton state={true}>취소</S.SelectButton>;
    } else if (!e.isApplied && e.isOpend && e.isEnabled) {
      return <S.SelectButton>신청</S.SelectButton>;
    } else {
      return <S.SelectButton state={false}></S.SelectButton>;
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
    const findCheckIndex: number = filterWeek.findIndex(
      (element) =>
        changeWeek(element.day) + "요일" ===
        (e.target as HTMLSpanElement).outerText
    );
    const newList = filterWeek.map((item, i) => {
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
    setFilterWeek(newList);
  };

  // 학년 오브젝트 생성 함수
  const changeCheckGrade = (e: MouseEvent) => {
    const findCheckIndex: number = filterGrade.findIndex(
      (element) =>
        element.grade === parseInt((e.target as HTMLSpanElement).outerText)
    );
    const newList = filterGrade.map((item, i) => {
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
    const CheckDay = filterWeek.filter((e) => e.check === true);
    const CheckGrade = filterGrade.filter((e) => e.check === true);

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
  }, [filterGrade, filterWeek]);

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
            {filterWeek.map((e: FilterDayType, i) => {
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
            {filterGrade.map((e: FilterGradeType, i) => {
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
        {afterList.length === 0 ? (
          <S.NotFilter>
            <SVG.Whale />
            <p>
              검색이나 필터를 사용해서
              <br />
              방과후를 검색해주세요.
            </p>
          </S.NotFilter>
        ) : (
          <>
            <S.ScollBox>
              {afterList.map((e: Type.PropListType, i) => (
                <S.Enrolment key={i}>
                  <div>
                    <p>{e.title}</p>
                    <p>{changeWeek(e.week[0])}</p>
                    <p>{e.grade}</p>
                  </div>
                  {makeSelectButton(e)}
                </S.Enrolment>
              ))}
            </S.ScollBox>
          </>
        )}
      </S.AfterSchoolBox>
    </S.AfterSchool>
  );
}

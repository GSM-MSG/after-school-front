import produce from "immer";
import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";
import api from "../../lib/api";
import checkQuery from "../../lib/checkQuery";
import { FixAfterSchool, PropListType, WeekType } from "../../types";
import { SeasonType } from "../../types/SeasonType";
import * as S from "./styles";

export function AdminFix({
  setFix,
  setState,
  state,
  afterSchools,
  setAfterSchools,
}: {
  setFix: Dispatch<SetStateAction<boolean>>;
  setState: Dispatch<SetStateAction<FixAfterSchool>>;
  state: FixAfterSchool;
  setAfterSchools: Dispatch<SetStateAction<PropListType[]>>;
  afterSchools: PropListType[];
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  const ChangeDay = (e: MouseEvent<HTMLButtonElement>) => {
    const week = e.currentTarget.getAttribute("name") as WeekType;
    setState(
      produce(state, (draft) => {
        if (draft.week.includes(week) && draft.week.length <= 1) return;
        if (draft.week.includes(week))
          draft.week = draft.week.filter((i) => i !== week);
        else draft.week.push(week);
      })
    );
  };

  const ChangeGrade = (e: MouseEvent<HTMLButtonElement>) => {
    const grade = Number(e.currentTarget.getAttribute("name")) as 1 | 2 | 3;
    if (!grade) return;

    setState(
      produce(state, (draft) => {
        if (draft.grade.includes(grade) && draft.grade.length <= 1) return;
        if (draft.grade.includes(grade))
          draft.grade = draft.grade.filter((i) => i !== grade);
        else draft.grade.push(grade);
      })
    );
  };

  const ChangeSeason = (e: MouseEvent<HTMLButtonElement>) => {
    const season = e.currentTarget.getAttribute("name") as SeasonType;
    if (!season) return;

    setState({
      ...state,
      season,
    });
  };

  const onSubmit = async () => {
    if (!state.title) {
      toast.error("강좌명을 입력해 주세요");
      return;
    }
    if (!state.week[0]) {
      toast.error("요일은 필수 요소입니다");
      return;
    }
    if (!state.teacher) {
      toast.error("담당 선생님 이름을 입력해 주세요");
      return;
    }
    try {
      await checkQuery(async () =>
        api.put(`/afterSchool/${state.id}`, {
          ...state,
          yearOf: new Date().getFullYear(),
          id: undefined,
        })
      );

      setAfterSchools(
        produce(afterSchools, (draft) => {
          return draft.map((i) => {
            if (i.id === state.id) return { ...i, ...state };
            return { ...i };
          });
        })
      );

      toast.success("방과후 수정에 성공했습니다");
    } catch (e) {
      toast.error("방과후 수정에 실패했습니다");
    }
    setFix(false);
  };

  return (
    <>
      <S.box>
        <S.title>방과후 수정</S.title>
        <S.afterSchoolType>
          <h2>시즌</h2>
          <div>
            <S.ChangrButton
              onClick={ChangeSeason}
              active={state.season.includes("FIRST")}
              position="left"
              name="FIRST"
            >
              1학기
            </S.ChangrButton>
            <S.ChangrButton
              onClick={ChangeSeason}
              active={state.season.includes("SUMMER")}
              name="SUMMER"
            >
              여름방학
            </S.ChangrButton>
            <S.ChangrButton
              onClick={ChangeSeason}
              active={state.season.includes("SECOND")}
              name="SECOND"
            >
              2학기
            </S.ChangrButton>
            <S.ChangrButton
              onClick={ChangeSeason}
              active={state.season.includes("WINTER")}
              position="right"
              name="WINTER"
            >
              겨울방학
            </S.ChangrButton>
          </div>
        </S.afterSchoolType>
        <S.lectureTitle>
          <h2>강좌명</h2>
          <S.lectureInput
            name="title"
            onChange={onChange}
            value={state.title}
          />
        </S.lectureTitle>
        <S.dayAndGrade>
          <S.day>
            <S.checkOverlap>
              <h2>강의요일</h2>
            </S.checkOverlap>
            <div>
              <S.ChangrButton
                onClick={ChangeDay}
                active={state.week.includes("MON")}
                position="left"
                name="MON"
              >
                월
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={state.week.includes("TUE")}
                name="TUE"
              >
                화
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={state.week.includes("WED")}
                position="right"
                name="WED"
              >
                수
              </S.ChangrButton>
            </div>
          </S.day>
          <S.grade>
            <S.checkOverlap>
              <h2>대상학년</h2>
            </S.checkOverlap>
            <div>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={state.grade.includes(1)}
                position="left"
                name="1"
              >
                1
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={state.grade.includes(2)}
                name="2"
              >
                2
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={state.grade.includes(3)}
                position="right"
                name="3"
              >
                3
              </S.ChangrButton>
            </div>
          </S.grade>
        </S.dayAndGrade>
        <S.lectureTitle>
          <h2>담당 선생님</h2>
          <S.lectureInput
            onChange={onChange}
            name="teacher"
            value={state.teacher}
          />
        </S.lectureTitle>
        <S.Submit onClick={onSubmit} type="submit" value="수정하기" />
      </S.box>
      <S.bg onClick={() => setFix(false)} />
    </>
  );
}

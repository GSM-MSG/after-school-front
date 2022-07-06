import React, { MouseEvent, useState } from "react";
import * as S from "./style";
import {
  AfterSchoolApiType,
  GradeType,
  PropListType,
  WeekType,
} from "../../types";
import { NextPage } from "next";
import { WeekKorean } from "../../lib/WeekKorean";
import produce from "immer";
import api from "../../lib/api";
import { toast } from "react-toastify";
import checkQuery from "../../lib/checkQuery";

interface NomalAfterSchoolProps {
  data: AfterSchoolApiType;
}

const NomalAfterSchool: NextPage<NomalAfterSchoolProps> = ({ data }) => {
  const [afterSchools, setAfterSchools] = useState<PropListType[]>(data.list);
  const [week, setWeek] = useState<WeekType | null>(null);
  const [grade, setGrade] = useState<GradeType | null>(null);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.getAttribute("name") as WeekType;

    if (Number(value)) {
      setGrade(Number(value) === grade ? null : (Number(value) as GradeType));
    } else setWeek(value === week ? null : value);
  };

  const applyAndCancel = async (id: number, isApplied: boolean) => {
    try {
      await checkQuery(
        async () =>
          api.post(`afterschool/${isApplied ? "cancel" : "apply"}`, {
            afterSchoolId: id,
          }),
        true
      );

      setAfterSchools(
        produce(afterSchools, (draft) => {
          return draft.map((i) => {
            if (i.id === id) return { ...i, isApplied: !isApplied };
            return i;
          });
        })
      );
    } catch (e) {
      toast.error(`방과후 ${isApplied ? "취소" : "신청"}에 실패했습니다`);
    }
  };

  return (
    <S.AfterSchool>
      <S.FilterBox>
        <S.FilterList>
          <p>요일</p>
          <S.FilterElement onClick={onClick} state={week === "MON"} name="MON">
            월요일
          </S.FilterElement>
          <S.FilterElement onClick={onClick} state={week === "TUE"} name="TUE">
            화요일
          </S.FilterElement>
          <S.FilterElement onClick={onClick} state={week === "WED"} name="WED">
            수요일
          </S.FilterElement>
        </S.FilterList>
        <S.FilterList>
          <p>대상학년</p>
          <S.FilterElement onClick={onClick} state={grade === 1} name="1">
            1학년
          </S.FilterElement>
          <S.FilterElement onClick={onClick} state={grade === 2} name="2">
            2학년
          </S.FilterElement>
          <S.FilterElement onClick={onClick} state={grade === 3} name="3">
            3학년
          </S.FilterElement>
        </S.FilterList>
      </S.FilterBox>
      <S.AfterSchoolBox>
        <S.CurseList>
          <span>강좌</span>
          <span>강의시간</span>
          <span>대상학년</span>
        </S.CurseList>
        <S.ScollBox>
          {afterSchools
            .filter((i) => {
              if (!week) return i;
              return i.dayOfWeek.includes(week);
            })
            .filter((i) => {
              if (!grade) return i;
              return i.grade.includes(grade);
            })
            .map(
              (i) =>
                i.isOpened && (
                  <S.Enrolment key={i.id}>
                    <div>
                      <p>{i.title}</p>
                      <p>
                        {i.dayOfWeek.map((week) => WeekKorean[week]).join(", ")}
                      </p>
                      <p>{i.grade.join(", ")}</p>
                    </div>
                    {!i.grade.includes(data.currentGrade) ||
                      (!i.dayOfWeek.filter((i) =>
                        data.appliedWeek.includes(i)
                      )[0] && (
                        <S.SelectButton
                          onClick={() => applyAndCancel(i.id, i.isApplied)}
                        >
                          {i.isApplied ? "취소" : "신청"}
                        </S.SelectButton>
                      ))}
                  </S.Enrolment>
                )
            )}
        </S.ScollBox>
      </S.AfterSchoolBox>
    </S.AfterSchool>
  );
};

export default NomalAfterSchool;

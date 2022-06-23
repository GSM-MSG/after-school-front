import React, { MouseEvent, useState } from "react";
import * as S from "./style";
import { WeekType } from "../../types";

export default function NomalAfterSchool() {
  const [week, setWeek] = useState<WeekType | null>(null);
  const [grade, setGrade] = useState<number | null>(null);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.getAttribute("name") as WeekType;

    if (Number(value)) setGrade(Number(value));
    else setWeek(value);
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
          <S.Enrolment>
            <div>
              <p>어쩌고</p>
              <p>월</p>
              <p>1학년</p>
            </div>
            <S.SelectButton>신청</S.SelectButton>
          </S.Enrolment>
        </S.ScollBox>
      </S.AfterSchoolBox>
    </S.AfterSchool>
  );
}

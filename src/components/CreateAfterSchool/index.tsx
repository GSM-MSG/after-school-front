import React, { Dispatch, SetStateAction, useState } from "react";
import { SeasonType } from "../../types/SeasonType";
import * as S from "./styles";

export function CreateAfterSchool({
  setCreate,
}: {
  setCreate: Dispatch<SetStateAction<boolean>>;
}) {
  const [afterSchool, setafterSchool] = useState<string>("Normal");
  const [day, setDay] = useState<string[]>(["MON"]);
  const [grade, setGrade] = useState<number[]>([1]);
  const [title, setTitle] = useState<string>("");
  const [season, setSeason] = useState<SeasonType>("FIRST");

  const ChangeAfter = (e: React.MouseEvent) =>
    setafterSchool((e.target as HTMLButtonElement).name);

  const ChangeDay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = `${e.currentTarget.getAttribute("name")}`;

    if (day.includes(name) && day.length <= 1) return;
    if (day.includes(name)) setDay(day.filter((i) => i !== name));
    else setDay([...day, name]);
  };

  const ChangeGrade = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = Number(e.currentTarget.getAttribute("name"));
    if (!name) return;

    if (grade.includes(name) && grade.length <= 1) return;
    if (grade.includes(name)) setGrade(grade.filter((i) => i !== name));
    else setGrade([...grade, name]);
  };

  const onChageSeason = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.getAttribute("name") as SeasonType;
    setSeason(name);
  };

  return (
    <>
      <S.box>
        <S.title>방과후 개설</S.title>
        <S.afterSchoolType>
          <h2>시즌</h2>
          <div>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "FIRST"}
              position="left"
              name="FIRST"
            >
              1학기
            </S.ChangrButton>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "SUMMER"}
              name="SUMMER"
            >
              여름방학
            </S.ChangrButton>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "SECOND"}
              name="SECOND"
            >
              2학기
            </S.ChangrButton>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "WINTER"}
              position="right"
              name="WINTER"
            >
              겨울방학
            </S.ChangrButton>
          </div>
        </S.afterSchoolType>
        <S.afterSchoolType>
          <h2>방과후 종류</h2>
          <div>
            <S.ChangrButton
              onClick={ChangeAfter}
              active={afterSchool === "Normal"}
              position="left"
              name="Normal"
            >
              일반
            </S.ChangrButton>
            <S.ChangrButton
              onClick={ChangeAfter}
              active={afterSchool === "EDITORIAL"}
              position="right"
              name="EDITORIAL"
            >
              공통
            </S.ChangrButton>
          </div>
        </S.afterSchoolType>
        <S.lectureTitle>
          <h2>강좌명</h2>
          <S.lectureInput
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
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
                active={day.includes("MON")}
                position="left"
                name="MON"
              >
                월
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("TUE")}
                name="TUE"
              >
                화
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("WED")}
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
                active={grade.includes(1)}
                position="left"
                name="1"
              >
                1
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={grade.includes(2)}
                name="2"
              >
                2
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeGrade}
                active={grade.includes(3)}
                position="right"
                name="3"
              >
                3
              </S.ChangrButton>
            </div>
          </S.grade>
        </S.dayAndGrade>
        <S.submit
          onClick={() => setCreate(false)}
          type="submit"
          value="개설하기"
        />
      </S.box>
      <S.bg onClick={() => setCreate(false)} />
    </>
  );
}

import produce from "immer";
import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import admin from "../../lib/admin";
import checkQuery from "../../lib/checkQuery";
import { PropListType } from "../../types";
import { SeasonType } from "../../types/SeasonType";
import * as S from "./styles";

interface CreateAfterSchoolProps {
  afterSchools?: PropListType[];
  setAfterSchools?: Dispatch<SetStateAction<PropListType[]>>;
  setCreate: Dispatch<SetStateAction<boolean>>;
}

export const CreateAfterSchool: NextPage<CreateAfterSchoolProps> = ({
  setCreate,
  afterSchools,
  setAfterSchools,
}) => {
  const [type, setType] = useState<string>("Normal");
  const [day, setDay] = useState<string[]>(["MON"]);
  const [grade, setGrade] = useState<number[]>([1]);
  const [title, setTitle] = useState<string>("");
  const [season, setSeason] = useState<SeasonType>("FIRST");
  const [teacher, setTeacher] = useState<string>("");

  const ChangeAfter = (e: React.MouseEvent) =>
    setType((e.target as HTMLButtonElement).name);

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

  const onChangeTeacher = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTeacher(e.target.value);

  const onSubmit = async () => {
    const body = {
      title,
      grade,
      dayOfWeek: day,
      teacher,
      season,
      yearOf: new Date().getFullYear(),
    };
    try {
      const data = await checkQuery<PropListType>(async () =>
        admin.post<PropListType>("/afterschool", body)
      );

      if (afterSchools && setAfterSchools)
        setAfterSchools(
          produce(afterSchools, (draft) => {
            draft.push(data);
          })
        );

      setCreate(false);
    } catch (e) {
      toast.error("????????? ????????? ??????????????????");
    }
  };

  return (
    <>
      <S.box>
        <S.title>????????? ??????</S.title>
        <S.afterSchoolType>
          <h2>??????</h2>
          <div>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "FIRST"}
              position="left"
              name="FIRST"
            >
              1??????
            </S.ChangrButton>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "SUMMER"}
              name="SUMMER"
            >
              ????????????
            </S.ChangrButton>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "SECOND"}
              name="SECOND"
            >
              2??????
            </S.ChangrButton>
            <S.ChangrButton
              onClick={onChageSeason}
              active={season === "WINTER"}
              position="right"
              name="WINTER"
            >
              ????????????
            </S.ChangrButton>
          </div>
        </S.afterSchoolType>
        <S.afterSchoolType>
          <h2>????????? ??????</h2>
          <div>
            <S.ChangrButton
              onClick={ChangeAfter}
              active={type === "Normal"}
              position="left"
              name="Normal"
            >
              ??????
            </S.ChangrButton>
            <S.ChangrButton
              onClick={ChangeAfter}
              active={type === "EDITORIAL"}
              position="right"
              name="EDITORIAL"
            >
              ??????
            </S.ChangrButton>
          </div>
        </S.afterSchoolType>
        <S.lectureTitle>
          <h2>?????????</h2>
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
              <h2>????????????</h2>
            </S.checkOverlap>
            <div>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("MON")}
                position="left"
                name="MON"
              >
                ???
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("TUE")}
                name="TUE"
              >
                ???
              </S.ChangrButton>
              <S.ChangrButton
                onClick={ChangeDay}
                active={day.includes("WED")}
                position="right"
                name="WED"
              >
                ???
              </S.ChangrButton>
            </div>
          </S.day>
          <S.grade>
            <S.checkOverlap>
              <h2>????????????</h2>
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
        <S.lectureTitle>
          <h2>?????? ?????????</h2>
          <S.lectureInput onChange={onChangeTeacher} value={teacher} />
        </S.lectureTitle>
        <S.submit onClick={onSubmit} type="submit" value="????????????" />
      </S.box>
      <S.bg onClick={() => setCreate(false)} />
    </>
  );
};

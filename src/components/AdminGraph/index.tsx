import { useEffect, useState } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { clubData } from "./DummyData";

export default function AdminGraph() {
  const [maxvalue, setMaxValue] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const speed: number = 10;
  const [week, setWeek] = useState<string>("MON");
  const [listActive, setListActive] = useState<string>("");
  const [clubName, setClubName] = useState<string>("");
  const [attend, setAttend] = useState<number>(0);
  const [attendValue, setAttendValue] = useState<number>(0);

  const changeWeek = (e: string) => {
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
  const MakePercent = (e: number) => Math.floor((e / 73) * 100);
  useEffect(() => {
    if (value < maxvalue) {
      setTimeout(() => {
        setValue(value + 1);
      }, speed);
    }
    if (attendValue < attend) {
      setTimeout(() => {
        setAttendValue(attendValue + 1);
      }, speed);
    }
  }, [value, maxvalue, attendValue, attend]);

  return (
    <S.Wrapper>
      <S.Title>
        <SVG.Graph />
        통계
      </S.Title>
      <S.GraphWrapper>
        <S.GraphBox>
          <h2>{clubName}</h2>
          <S.Layout>
            <S.Progress value={value} append={attendValue} />
          </S.Layout>
          <p>총75명</p>
          <S.GraphInformBox>
            <S.GraphInform color="#4C53FF">신청자</S.GraphInform>
            <S.GraphInform color="#FFFFFF">비 신청자</S.GraphInform>
          </S.GraphInformBox>
        </S.GraphBox>
        <S.ListWrapper>
          <S.WeekBox>
            <S.Week onClick={() => setWeek("MON")} active={week === "MON"}>
              월
            </S.Week>
            <S.Week onClick={() => setWeek("TUE")} active={week === "TUE"}>
              화
            </S.Week>
            <S.Week onClick={() => setWeek("WED")} active={week === "WED"}>
              수
            </S.Week>
          </S.WeekBox>
          <S.ListTitle>
            <span>방과후명</span>
            <span>요일</span>
            <span>신청인원수</span>
            <span>통계</span>
            <span>명단</span>
          </S.ListTitle>
          <S.ListBox>
            {clubData
              .filter((e) => e.day === week)
              .map((e, index) => {
                return (
                  <S.List
                    key={index}
                    onClick={() => {
                      setMaxValue(MakePercent(e.attend));
                      setValue(0);
                      setListActive(e.club);
                      setClubName(e.club);
                      setAttend(e.attend);
                      setAttendValue(0);
                    }}
                    active={listActive === e.club && week === e.day}
                  >
                    <span>{e.club}</span>
                    <span>{changeWeek(e.day)}</span>
                    <span>{e.attend}</span>
                    <span>{MakePercent(e.attend)}%</span>
                    <span></span>
                  </S.List>
                );
              })}
          </S.ListBox>
        </S.ListWrapper>
      </S.GraphWrapper>
    </S.Wrapper>
  );
}

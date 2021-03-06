import { useEffect, useState } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { WeekKorean } from "../../lib/WeekKorean";
import { ClubStatistics, WeekType } from "../../types";
import { NextPage } from "next";

interface AdminGraphProps {
  clubData: {
    total: number;
    afterSchools: ClubStatistics[];
  };
}

const AdminGraph: NextPage<AdminGraphProps> = ({ clubData }) => {
  const [value, setValue] = useState<number>(0);
  const speed: number = 10;
  const [week, setWeek] = useState<WeekType>("MON");
  const [listActive, setListActive] = useState<number>();
  const [clubName, setClubName] = useState<string>("");
  const [attend, setAttend] = useState<number>(0);
  const [attendValue, setAttendValue] = useState<number>(0);

  const MakePercent = (e: number) => Math.floor((e / 73) * 100);

  useEffect(() => {
    if (value < attend) {
      setTimeout(() => {
        setValue(value + 1);
      }, speed);
    }
    if (attendValue < attend) {
      setTimeout(() => {
        setAttendValue(attendValue + 1);
      }, speed);
    }
  }, [value, attendValue, attend]);

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
          <p>총{clubData.total}명</p>
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
            <span>대상학년</span>
          </S.ListTitle>
          <S.ListBox>
            {clubData.afterSchools
              .filter((e) => e.dayOfWeekList.includes(week))
              .map((e) => {
                return (
                  <S.List
                    key={e.afterSchoolIdx}
                    onClick={() => {
                      setValue(0);
                      setListActive(e.afterSchoolIdx);
                      setClubName(e.afterSchoolTitle);
                      setAttend(e.attend);
                      setAttendValue(0);
                    }}
                    active={listActive === e.afterSchoolIdx}
                  >
                    <span>{e.afterSchoolTitle}</span>
                    <span>
                      {e.dayOfWeekList.map((i) => WeekKorean[i]).join(", ")}
                    </span>
                    <span>{e.attend}</span>
                    <span>{MakePercent(e.attend)}%</span>
                    <span>{e.grade.join(", ")}학년</span>
                  </S.List>
                );
              })}
          </S.ListBox>
        </S.ListWrapper>
      </S.GraphWrapper>
    </S.Wrapper>
  );
};

export default AdminGraph;

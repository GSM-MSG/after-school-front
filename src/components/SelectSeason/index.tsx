import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import admin from "../../lib/admin";
import checkQuery from "../../lib/checkQuery";
import { SeasonType } from "../../types/SeasonType";
import * as S from "./styles";

export default function SelectSeason({
  setAllSelect,
  type,
}: {
  setAllSelect: Dispatch<SetStateAction<boolean>>;
  type: "open" | "close" | null;
}) {
  const [season, setSeason] = useState<SeasonType>("FIRST");

  const onChange = (season: SeasonType) => setSeason(season);

  const onSubmit = async () => {
    try {
      await checkQuery(async () =>
        admin.put(`/afterschool/${type}/all`, {
          season,
          year: new Date().getFullYear(),
        })
      );

      setAllSelect(false);
      toast.success(`전체 ${type === "open" ? "오픈" : "마감"}에 성공했습니다`);
    } catch (e) {
      toast.error(`전체 ${type === "open" ? "오픈" : "마감"}에 실패했습니다`);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>
          전체 신청 받을
          <br />
          시즌을 선택해주세요.
        </S.Title>
        <S.RadioBox>
          <label>
            <input
              type="radio"
              onChange={() => onChange("FIRST")}
              checked={season === "FIRST"}
              name="season"
            />
            <p>1학기</p>
          </label>
          <label>
            <input
              type="radio"
              onChange={() => onChange("SECOND")}
              checked={season === "SECOND"}
              name="season"
            />
            <p>2학기</p>
          </label>
          <label>
            <input
              type="radio"
              onChange={() => onChange("SUMMER")}
              checked={season === "SUMMER"}
              name="season"
            />
            <p>여름방학</p>
          </label>
          <label>
            <input
              type="radio"
              onChange={() => onChange("WINTER")}
              checked={season === "WINTER"}
              name="season"
            />
            <p>겨울방학</p>
          </label>
        </S.RadioBox>
        <S.SelectBox>
          <S.Button color="grade" onClick={() => setAllSelect(false)}>
            취소
          </S.Button>
          <S.Button color="blue" onClick={onSubmit}>
            확인
          </S.Button>
        </S.SelectBox>
      </S.Wrapper>
      <S.bg />
    </>
  );
}

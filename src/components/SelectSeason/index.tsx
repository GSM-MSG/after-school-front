import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

export default function SelectSeason({
  setAllSelect,
}: {
  setAllSelect: Dispatch<SetStateAction<boolean>>;
}) {
  const SelectList = ["1학기", "2학기", "여름방학", "겨울방학"];

  return (
    <>
      <S.Wrapper>
        <S.Title>
          전체 신청 받을
          <br />
          시즌을 선택해주세요.
        </S.Title>
        <S.RadioBox>
          {SelectList.map((e: string, index) => {
            return (
              <label key={index}>
                <input type="radio" name="season" />
                <p>{e}</p>
              </label>
            );
          })}
        </S.RadioBox>
        <S.SelectBox>
          <S.Button color="grade" onClick={() => setAllSelect(false)}>
            취소
          </S.Button>
          <S.Button color="blue" onClick={() => setAllSelect(false)}>
            확인
          </S.Button>
        </S.SelectBox>
      </S.Wrapper>
      <S.bg />
    </>
  );
}

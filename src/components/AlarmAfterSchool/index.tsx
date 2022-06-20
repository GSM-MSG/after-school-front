import { Letter } from "../../SVG";
import Link from "next/link";
import * as S from "./styles";

export function AlarmAfterSchool() {
  return (
    <S.AfterMoveBg>
      <S.AfterMoveBox>
        <h2>방과후 신청 기간</h2>
        <Letter />
        <p>방과후 신청 기간입니다.</p>
        <p>방과후를 신청하러 이동하시겠습니까?</p>
        <Link href="/afterschool">
          <S.AfterMoveBt>이동</S.AfterMoveBt>
        </Link>
        <S.NotToDay>
          <input type="checkbox" id="checkBox" value="#" />
          <label htmlFor="checkBox">하루 동안 보지않기</label>
        </S.NotToDay>
      </S.AfterMoveBox>
    </S.AfterMoveBg>
  );
}

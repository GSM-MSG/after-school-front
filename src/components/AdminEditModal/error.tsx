import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

export function Error({
  turnError,
}: {
  turnError: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <S.bg onClick={() => turnError(false)}>
      <S.errorBox>
        <h2>죄송합니다</h2>
        <p>
          아직 사용 불가능한 기능입니다.
          <br />
          다음 버전을 기다려주세요.
        </p>
        <button>확인</button>
      </S.errorBox>
    </S.bg>
  );
}

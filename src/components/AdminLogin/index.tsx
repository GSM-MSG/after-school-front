import * as S from "./styles";
import * as SVG from "../../SVG";
import { useState } from "react";

export default function AdminLogin() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.MainTitle>
          GCMS
          <br />
          관리의 모든 것
        </S.MainTitle>
        <SVG.Whale />
      </S.TitleWrapper>
      <S.LoginWrapper>
        <SVG.LogoBlack />
        <S.LoginTitle>Sign in</S.LoginTitle>
        <S.LoginInput
          type="email"
          placeholder="이메일을 입력하세요"
          autoComplete="off"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
        />
        <S.LoginInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          autoCapitalize="off"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}

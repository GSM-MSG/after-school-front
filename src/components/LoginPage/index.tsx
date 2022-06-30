import { ServerUrl } from "../../config/config";
import * as S from "./styles";
import * as SVG from "../../SVG";
import Link from "next/link";

export default function LoginPage() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.MainTitle>
          GCM 방과후
          <br />
          관리의 모든 것
        </S.MainTitle>
        <SVG.Whale />
      </S.TitleWrapper>
      <S.LoginWrapper>
        <SVG.LogoBlack />
        <S.LoginTitle>Sign in</S.LoginTitle>
        <S.OauthButton href={`${ServerUrl}/auth/login`}>
          <SVG.Google />
          <S.LoginText>Sign in with Google</S.LoginText>
        </S.OauthButton>
        <Link href="/admin">
          <S.AdminLogin>어드민 페이지 로그인</S.AdminLogin>
        </Link>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}

import { ServerUrl } from "../../config/config";
import * as S from "./styles";
import * as SVG from "../../SVG";

export default function LoginPage() {
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
        <S.OauthButton href={`${ServerUrl}/auth/web`}>
          <SVG.Google />
          <S.LoginText>Sign in with Google</S.LoginText>
        </S.OauthButton>
        <S.LoginButton>어드민 페이지 로그인</S.LoginButton>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}

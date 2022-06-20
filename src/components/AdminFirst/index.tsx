import * as S from "./styles";
import * as SVG from "../../SVG";

export default function AdminFirst() {
  return (
    <>
      <S.Wrapper>
        <S.Contents>
          <S.Logo>
            <SVG.LogoWhite />
            <S.Title>어드민 페이지</S.Title>
          </S.Logo>
          <S.ButtonBox>
            <S.Button color="#4C53FF">
              <S.LoginText color="#FFFFFF">동아리 어드민 페이지</S.LoginText>
            </S.Button>
            <S.Button color="#fff">
              <S.LoginText color="#000">방과후 어드민 페이지</S.LoginText>
            </S.Button>
          </S.ButtonBox>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}

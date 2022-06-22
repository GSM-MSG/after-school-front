import * as S from "./styles";
import * as SVG from "../../SVG";
import { useForm } from "react-hook-form";

export default function AdminLogin() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {};

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
      <S.LoginWrapper onSubmit={handleSubmit(onSubmit)}>
        <SVG.LogoBlack />
        <S.LoginTitle>Sign in</S.LoginTitle>
        <S.LoginInput
          {...register("email", { required: true })}
          placeholder="이메일을 입력하세요"
          autoComplete="off"
        />
        <S.LoginInput
          type="password"
          {...register("password", { required: true })}
          placeholder="비밀번호를 입력하세요"
          autoCapitalize="off"
        />
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}

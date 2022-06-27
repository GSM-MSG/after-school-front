import * as S from "./styles";
import * as SVG from "../../SVG";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import admin from "../../lib/admin";

interface HandlerType {
  userId: string;
  password: string;
}

export default function AdminLogin() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<HandlerType>();

  const onSubmit: SubmitHandler<HandlerType> = async (data) => {
    try {
      await admin.post("/teacher", {
        ...data,
      });

      router.push("/admin/afterSchool");

      toast.success("로그인 성공");
    } catch (e) {
      toast.error("로그인 실패");
    }
  };

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
          {...register("userId", { required: true })}
          placeholder="아이디을 입력하세요"
          autoComplete="off"
        />
        <S.LoginInput
          type="password"
          {...register("password", { required: true })}
          placeholder="비밀번호를 입력하세요"
        />
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}

import * as S from "./styles";
import { ClubDetail } from "../../types/ClubDetail";
import Link from "next/link";
import * as SVG from "../../SVG";
import { useRouter } from "next/router";
import api from "../../lib/api";
import { toast } from "react-toastify";
import checkQuery from "../../lib/checkQuery";
import { useState } from "react";
import produce from "immer";

interface InfoPageProps {
  clubData: ClubDetail;
}

export default function InfoPage({ clubData }: InfoPageProps) {
  const [club, setClub] = useState(clubData);
  const router = useRouter();

  const leftClick = async () => {
    if (club.club.isOpened) {
      router.push(`${router.asPath}/application`);
      return;
    }

    if (!confirm(`정말 "${clubData.club.title}"동아리 신청을 여시겠습니까?`))
      return;

    try {
      await checkQuery(async () =>
        api.put(`club/web/open`, {
          q: clubData.club.title,
          type: clubData.club.type,
        })
      );
      toast("동아리 신청이 열렸습니다.");
      setClub(
        produce(club, (draft) => {
          draft.club.isOpened = !draft.club.isOpened;
        })
      );
    } catch (e) {
      toast.error("동아리 신청 열기에 실패했습니다.");
    }
  };

  const ApplyOrCancel = async (type: "apply" | "cancel") => {
    if (
      !confirm(
        `정말 "${clubData.club.title}"동아리를 신청${
          type === "cancel" ? " 취소" : ""
        }하시겠습니까?`
      )
    )
      return;

    try {
      await checkQuery(async () =>
        api.post(`/club/web/${type}`, {
          q: clubData.club.title,
          type: clubData.club.type,
        })
      );
      setClub(
        produce(club, (draft) => {
          draft.isApplied = type === "apply";
        })
      );
      toast.success(
        `동아리 신청${type === "cancel" ? " 취소" : ""}에 성공했습니다.`
      );
    } catch (e) {
      toast.error(
        `동아리 신청${type === "cancel" ? " 취소" : ""}에 실패했습니다.`
      );
    }
  };

  const exit = async () => {
    if (!confirm(`정말 "${clubData.club.title}"동아리를 탈퇴하시겠습니까?`))
      return;

    try {
      await checkQuery(async () =>
        api.post("/user/web/exit", {
          q: clubData.club.title,
          type: clubData.club.type,
        })
      );
      toast.success("동아리 탈퇴에 성공했습니다.");
      router.push("/");
    } catch (e) {
      toast.error("동아리 탈퇴에 실패했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.CoverImg src={club.club.bannerUrl || "/png/Loading.png"} />
      <S.Contents>
        <S.Top>
          <S.ClubName>{club.club.title}</S.ClubName>

          {club.scope !== "USER" && club.member.length >= 10 && (
            <Link href={`${router.asPath}/users`}>
              <S.AllMember>전체 보기</S.AllMember>
            </Link>
          )}
        </S.Top>
        <S.Users>
          {club.club.teacher && (
            <S.User>
              <SVG.Teacher />
              <S.Badge>선생님</S.Badge>
              <S.UserName>{club.club.teacher}</S.UserName>
            </S.User>
          )}
          <S.User>
            <S.UserImg src={club.head.userImg} />
            <S.Badge>부장</S.Badge>
            <S.UserName>{club.head.name}</S.UserName>
          </S.User>
          {club.member.map((i, idx) => (
            <S.User key={idx}>
              <S.UserImg src={i.userImg} />
              <S.Badge>
                {i.grade}-{i.class}
              </S.Badge>
              <S.UserName>{i.name}</S.UserName>
            </S.User>
          ))}
          {club.scope === "HEAD" && (
            <Link href={`${router.asPath}/users`}>
              <a style={{ cursor: "pointer" }}>
                <S.User>
                  <SVG.EditUser />
                  <S.UserName>관리하기</S.UserName>
                </S.User>
              </a>
            </Link>
          )}
        </S.Users>
      </S.Contents>
      <S.Info>
        <S.Left>
          <S.Introduce>
            <h2>소개</h2>
            <p>{club.club.description}</p>
          </S.Introduce>

          <S.ContactMeans>
            <div>
              <h2>연락처</h2>
              <S.ContactUser>
                <S.User>
                  <S.UserImg src={club.head.userImg} />
                  <S.Badge>부장</S.Badge>
                  <S.UserName>{club.head.name}</S.UserName>
                </S.User>
                <S.Contact>{club.club.contact}</S.Contact>
              </S.ContactUser>
            </div>
            <S.NotionLink>
              <S.Title>노션 링크</S.Title>
              <S.Link href={club.club.notionLink}>
                {club.club.notionLink.slice(1, 30)}
              </S.Link>
            </S.NotionLink>
          </S.ContactMeans>
        </S.Left>
        {club.activityurls[0] && (
          <div>
            <S.ImgTitle>홍보 사진</S.ImgTitle>
            <S.Images>
              {club.activityurls.map((url, idx) => (
                <S.Img key={idx} src={url} />
              ))}
            </S.Images>
          </div>
        )}
      </S.Info>
      {club.scope === "HEAD" && (
        <S.Buttons>
          <S.Button onClick={leftClick} position="left" background="#FF8181">
            {club.club.isOpened ? "명단 관리하기" : "신청 받기"}
          </S.Button>
          <S.Button
            onClick={() => router.push(`${router.asPath}/edit`)}
            position="right"
            background="#4c53ff"
          >
            수정하기
          </S.Button>
        </S.Buttons>
      )}

      {club.scope === "MEMBER" && (
        <S.Buttons>
          <S.FuncButton onClick={exit} background="#FF8181">
            탈퇴하기
          </S.FuncButton>
        </S.Buttons>
      )}

      {club.scope === "USER" && club.club.isOpened && !club.isApplied && (
        <S.Buttons>
          <S.FuncButton
            onClick={() => ApplyOrCancel("apply")}
            background="#4C53FF"
          >
            신청하기
          </S.FuncButton>
        </S.Buttons>
      )}

      {club.isApplied && club.scope === "USER" && club.club.isOpened && (
        <S.Buttons>
          <S.FuncButton
            onClick={() => ApplyOrCancel("cancel")}
            background="#FF8181"
          >
            신청 취소하기
          </S.FuncButton>
        </S.Buttons>
      )}
    </S.Wrapper>
  );
}

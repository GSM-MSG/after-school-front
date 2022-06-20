import { NextPage } from "next";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { useRef, useState } from "react";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";
import { UserType } from "../../types/UsersType";
import { TextsType } from "./types/TextsType";
import { ClubKind } from "./types/ClubKind";
import { InfoType } from "./types/InfoType";
import { toast } from "react-toastify";
import api from "../../lib/api";
import checkQuery from "../../lib/checkQuery";
import { useRouter } from "next/router";
import { ClubDetail } from "../../types/ClubDetail";

interface CreatePageProps {
  clubData?: ClubDetail;
}

const CreatePage: NextPage<CreatePageProps> = ({ clubData }) => {
  const router = useRouter();
  const bannerRef = useRef<HTMLInputElement | null>(null);
  const [texts, setTexts] = useState<TextsType>({
    title: clubData?.club.title || "",
    description: clubData?.club.description || "",
    notionLink: clubData?.club.notionLink || "",
  });
  const [users, setUsers] = useState<UserType[]>(clubData?.member || []);
  const [images, setImages] = useState<string[]>(clubData?.activityurls || []);
  const [type, setType] = useState<ClubKind>("MAJOR");
  const [info, setInfo] = useState<InfoType>({
    teacher: clubData?.club.teacher || "",
    contact: clubData?.club.contact || "",
  });
  const [bannerUrl, setBannerUrl] = useState<string>(
    clubData?.club.bannerUrl || ""
  );

  const UploadImg = async () => {
    if (!bannerRef.current?.files || !bannerRef.current?.files[0]) return;
    if (!bannerRef?.current?.files[0].type.includes("image")) return;

    try {
      const formData = new FormData();
      formData.append("files", bannerRef.current?.files[0]);

      const data = await checkQuery(
        async () => await api.post("/image/web", formData)
      );

      setBannerUrl(data[0]);
    } catch (e) {
      toast.error("이미지 업로드 실패");
    }
  };

  const onSubmit = async () => {
    if (/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi.test(texts.title)) {
      toast.info("제목에 특수문자를 넣을 수 없습니다.");
      return;
    }

    if (!confirm(`정말로 동아리를 ${clubData ? "수정" : "생성"}하시겠습니까?`))
      return;

    try {
      await checkQuery(() =>
        api.post("/club/web", {
          q: clubData?.club.title,
          activityUrls: images,
          type,
          ...texts,
          notionLink: texts.notionLink ? texts.notionLink : undefined,
          ...info,
          member: !clubData ? users.map((i) => i.email) : undefined,
          bannerUrl,
        })
      );

      router.push("/");
    } catch (e) {
      toast.error(`동아리 ${clubData ? "수정" : "생성"} 실패`);
    }
  };

  const onBoom = async () => {
    try {
      await checkQuery(async () =>
        api.post("/club/web", {
          q: clubData?.club.title,
          type: clubData?.club.type,
        })
      );
      toast.success("동아리 폭파에 성공했습니다.");
      router.push("/");
    } catch (e) {
      toast.error("동아리 폭파에 실패했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <input
        ref={bannerRef}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={UploadImg}
      />
      {bannerUrl ? (
        <S.BannerView
          src={bannerUrl}
          onDoubleClick={() => bannerRef.current?.click()}
        />
      ) : (
        <S.BannerImg onClick={() => bannerRef.current?.click()}>
          <SVG.AddImg />
          <S.Comment>
            배너를 추가해 주세요
            <br />
          </S.Comment>
          <S.Description>(1920 X 400)</S.Description>
        </S.BannerImg>
      )}
      <S.Forms>
        <LeftForm
          isEdit={!!clubData}
          users={users}
          setUsers={setUsers}
          texts={texts}
          setTexts={setTexts}
          type={type}
        />
        <RightForm
          isEdit={!!clubData}
          images={images}
          setImages={setImages}
          kind={type}
          setKind={setType}
          info={info}
          setInfo={setInfo}
          setUsers={setUsers}
        />
      </S.Forms>

      <S.ButtonCenter>
        {clubData ? (
          <>
            <S.EditButton onClick={onSubmit}>수정하기</S.EditButton>
            <S.BoomButton onClick={onBoom}>폭파하기</S.BoomButton>
          </>
        ) : (
          <S.SubmitButton onClick={onSubmit}>등록하기</S.SubmitButton>
        )}
      </S.ButtonCenter>
    </S.Wrapper>
  );
};

export default CreatePage;

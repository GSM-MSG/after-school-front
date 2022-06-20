import { NextPage } from "next";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import * as S from "./styles";
import * as SVG from "../../SVG";
import { ClubKind } from "./types/ClubKind";
import { InfoType } from "./types/InfoType";
import checkQuery from "../../lib/checkQuery";
import api from "../../lib/api";
import { toast } from "react-toastify";
import { UserType } from "../../types";

interface RightFormProps {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
  kind: ClubKind;
  setKind: Dispatch<SetStateAction<ClubKind>>;
  info: InfoType;
  setInfo: Dispatch<SetStateAction<InfoType>>;
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  isEdit: boolean;
}

const RightForm: NextPage<RightFormProps> = ({
  images,
  setImages,
  kind,
  setKind,
  setUsers,
  info,
  setInfo,
  isEdit,
}) => {
  const ImgRef = useRef<HTMLInputElement>(null);
  const ChangeKind = (e: any) => {
    setKind(e.target.name);
    setUsers([]);
  };

  const UploadImg = async () => {
    if (!ImgRef || !ImgRef.current || !ImgRef.current.files) return;
    if (!ImgRef?.current?.files[0].type.includes("image")) return;

    try {
      const formData = new FormData();
      formData.append("files", ImgRef.current.files[0]);

      const data = await checkQuery(
        async () => await api.post("/image/web", formData)
      );

      setImages([...images, data[0]]);
    } catch (e) {
      toast.error("이미지 업로드에 실패했습니다.");
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });

  const deleteActivityUrl = (idx: number) =>
    setImages(images.filter((_, i) => i !== idx));

  return (
    <S.RightFormWrapper>
      <div>
        <h2>
          동아리 홍보 사진<S.Choice>(선택)</S.Choice>
        </h2>
        <input
          style={{ display: "none" }}
          type="file"
          ref={ImgRef}
          onChange={UploadImg}
          accept="image/*"
        />
        <S.Imgs>
          {images?.map((i: string, idx: number) => (
            <S.Img
              src={i}
              key={idx}
              onDoubleClick={() => deleteActivityUrl(idx)}
            />
          ))}
          {images.length < 4 && (
            <S.ImgAddBox onClick={() => ImgRef.current?.click()}>
              <SVG.ImgIcon />
              <S.ImgAddComment>추가하기</S.ImgAddComment>
            </S.ImgAddBox>
          )}
        </S.Imgs>
      </div>
      {!isEdit && (
        <div>
          <h2>동아리 종류</h2>
          <S.ClubButton
            onClick={ChangeKind}
            active={kind === "MAJOR"}
            position="left"
            name="MAJOR"
          >
            전공
          </S.ClubButton>
          <S.ClubButton
            onClick={ChangeKind}
            active={kind === "FREEDOM"}
            name="FREEDOM"
          >
            자율
          </S.ClubButton>
          <S.ClubButton
            onClick={ChangeKind}
            active={kind === "EDITORIAL"}
            position="right"
            name="EDITORIAL"
          >
            사설
          </S.ClubButton>
        </div>
      )}
      <div>
        <h2>연락처</h2>
        <h3>
          선생님 성함<S.Choice>(선택)</S.Choice>
        </h3>
        <S.InfoInput
          value={info.teacher}
          name="teacher"
          onChange={onChange}
          placeholder="이름을 입력해 주세요"
        />
        <h3>부장</h3>
        <S.InfoInput
          value={info.contact}
          name="contact"
          onChange={onChange}
          placeholder="연락처를 입력해 주세요"
        />
      </div>
    </S.RightFormWrapper>
  );
};

export default RightForm;

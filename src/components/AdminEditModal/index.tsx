import * as S from "./styles";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Error } from "./error";
type userDumyDataType = {
  name: string;
  grade: number;
  class: number;
  num: number;
  img: string;
  club: string;
  role: string;
};
export default function AdminEditModal({
  item = {
    name: "강경민",
    grade: 2,
    class: 2,
    num: 1,
    img: "dd",
    club: "MSG",
    role: "부원",
  },
  onClose,
}: {
  item: userDumyDataType;
  onClose: Dispatch<SetStateAction<boolean>>;
}) {
  const [values, setValues] = useState({
    name: item.name,
    stuNum: item.grade * 1000 + item.class * 100 + item.num,
    club: item.club,
    role: item.role,
  });
  const [errorModal, setErrorModal] = useState(false);

  return (
    <S.ModifyLayout>
      <S.ModifyBox>
        <h2>학생정보 수정</h2>
        <S.ProfileImg src="/png/Loading.png" />
        <S.InformBox>
          <S.InPutmBox>
            <label>
              이름
              <S.ModifyInput
                value={values.name}
                onChange={(e: any) =>
                  setValues({ ...values, name: e.target.value })
                }
              />
            </label>
          </S.InPutmBox>
          <S.InPutmBox>
            <label>
              학번
              <S.ModifyInput
                value={values.stuNum}
                onChange={(e: any) => {
                  setValues({ ...values, stuNum: +e.target.value });
                }}
                readOnly
              />
            </label>
          </S.InPutmBox>
          <S.InPutmBox>
            <label>
              방과후
              <S.ModifyInput
                value={values.club}
                onChange={(e: any) => {
                  setValues({ ...values, stuNum: +e.target.value });
                }}
                readOnly
              />
            </label>
          </S.InPutmBox>
          <S.InPutmBox>
            <label>
              동아리
              <div>
                <S.ModifyInput
                  value={values.club}
                  onChange={(e: any) =>
                    setValues({ ...values, club: e.target.value })
                  }
                  readOnly
                />
                <S.FindBtn onClick={() => setErrorModal(true)}>
                  찾아보기
                </S.FindBtn>
              </div>
            </label>
          </S.InPutmBox>
          <S.InPutmBox>
            <label>
              역할
              <S.ModifyInput
                value={values.role}
                onChange={(e: any) =>
                  setValues({ ...values, role: e.target.value })
                }
              />
            </label>
          </S.InPutmBox>
        </S.InformBox>
        <S.DoneBtn onClick={() => onClose(false)}>완료</S.DoneBtn>
      </S.ModifyBox>
      {errorModal && <Error turnError={setErrorModal} />}
    </S.ModifyLayout>
  );
}

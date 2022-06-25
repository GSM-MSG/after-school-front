import * as S from "./styles";
import * as SVG from "../../SVG";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";

export default function SelectButton({
  setCategory,
}: {
  setCategory: Dispatch<SetStateAction<number | undefined>>;
}) {
  //버튼 on,off관리
  const [selectButton, setSelectButton] = useState(false);
  //각 버튼 SVG정보 배열
  const list: Array<ReactElement> = [
    <SVG.Fix key="Fix" />,
    <SVG.Delete key="Delete" />,
    <SVG.Graph key="Graph" />,
    <SVG.Open key="Opem" />,
  ];
  //클릭시 바뀌는 버튼 오브젝트 배열 값 관리 state
  const [newList, setNweList] = useState<ReactElement[]>(list);
  //선택한 SVG인덱스 찾아주는 람수
  const Select = (select: number) => {
    if (list.length === newList.length) {
      setNweList(list.filter((_, index) => index === select));
      setCategory(select);
    } else {
      setNweList(list);
      setCategory(undefined);
    }
  };

  return (
    <S.BtBox trun={selectButton}>
      <S.Toggle onClick={() => setSelectButton(!selectButton)}>
        {selectButton ? <SVG.X width="25" height="25" /> : <SVG.UpArrow />}
      </S.Toggle>
      {newList.map((e, index) => {
        return (
          <S.Button
            onClick={() => Select(index)}
            className="bt"
            key={index}
            num={index}
          >
            {e}
          </S.Button>
        );
      })}
    </S.BtBox>
  );
}

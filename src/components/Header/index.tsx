import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

import * as SVG from "../../SVG";
import * as S from "./styles";

export default function Header({
  turn = true,
  link,
  clickModal,
}: {
  turn?: boolean;
  link?: boolean;
  clickModal?: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {}, []);
  console.log(link);
  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        {turn && (
          <Link href={clickModal ? "/admin/afterschool" : "/create"}>
            <a onClick={() => clickModal && clickModal(true)}>
              <SVG.Plus />
            </a>
          </Link>
        )}
        <Link href={link ? "/admin/stuedit" : "/my"}>
          <a>
            <SVG.UserIcon />
          </a>
        </Link>
      </S.Icons>
    </S.Wrapper>
  );
}

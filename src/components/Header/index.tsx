import { NextPage } from "next";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import * as SVG from "../../SVG";
import * as S from "./styles";

interface HeaderProps {
  turn?: boolean;
  link?: boolean;
  clickModal?: Dispatch<SetStateAction<boolean>>;
}

const Header: NextPage<HeaderProps> = ({ turn = true, link, clickModal }) => {
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
};

export default Header;

import { NextPage } from "next";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import * as SVG from "../../SVG";
import * as S from "./styles";

interface HeaderProps {
  turn?: boolean;
  clickModal?: Dispatch<SetStateAction<boolean>>;
}

const Header: NextPage<HeaderProps> = ({ turn = true, clickModal }) => {
  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        {turn ? (
          <div onClick={() => clickModal && clickModal(true)}>
            <SVG.Plus />
          </div>
        ) : (
          <Link href="/my">
            <a>
              <SVG.UserIcon />
            </a>
          </Link>
        )}
      </S.Icons>
    </S.Wrapper>
  );
};

export default Header;

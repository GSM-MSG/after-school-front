import { NextPage } from "next";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import * as SVG from "../../SVG";
import * as S from "./styles";

interface HeaderProps {
  turn?: boolean;
  isClient?: boolean;
  clickModal?: Dispatch<SetStateAction<boolean>>;
}

const Header: NextPage<HeaderProps> = ({
  turn = true,
  clickModal,
  isClient,
}) => {
  return (
    <S.Wrapper>
      <Link href={isClient ? "/" : "/admin/afterSchool"}>
        <S.Logo>GCMS</S.Logo>
      </Link>
      <S.Icons>
        {turn && (
          <S.Icon onClick={() => clickModal && clickModal(true)}>
            <SVG.Plus />
          </S.Icon>
        )}
      </S.Icons>
    </S.Wrapper>
  );
};

export default Header;

import Link from "next/link";
import { Club } from "../../types";
import * as S from "./styles";

interface CardProps {
  width?: number;
  club: Club;
}

export default function Card({ club }: CardProps) {
  return (
    <Link href={`/${club.type.toLowerCase()}/${club.title}`}>
      <S.Wrapper>
        <S.Picture src={club.bannerUrl || "/png/Loading.png"} />
        <S.Name>{club.title}</S.Name>
      </S.Wrapper>
    </Link>
  );
}

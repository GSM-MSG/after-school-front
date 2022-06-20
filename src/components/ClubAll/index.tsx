import Header from "../Header";

import * as S from "./styles";
import { Club } from "../../types/Clubs";
import { useRouter } from "next/router";
import CardList from "../CardList";

interface MainPageProps {
  clubs: Club[];
  type: "major" | "editorial" | "freedom";
}

export default function ClubAll({ clubs, type }: MainPageProps) {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Tags>
          <S.Tag onClick={() => redirect("/")} active={type === "major"}>
            전공동아리
          </S.Tag>

          <S.Tag
            onClick={() => redirect("/freedom")}
            active={type === "freedom"}
          >
            자율동아리
          </S.Tag>

          <S.Tag
            onClick={() => redirect("/editorial")}
            active={type === "editorial"}
          >
            사설동아리
          </S.Tag>
        </S.Tags>
        <S.Hr />
        <CardList clubs={clubs} type={type} />
      </S.Wrapper>
    </>
  );
}

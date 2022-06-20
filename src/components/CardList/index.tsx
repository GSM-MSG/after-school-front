import { Club } from "../../types";
import Card from "../Card";

import * as S from "./styles";

interface CardListProps {
  clubs: Club[];
  type: "major" | "editorial" | "freedom";
}

export default function CardList({ clubs }: CardListProps) {
  return (
    <S.CardList>
      {clubs.map((i) => (
        <Card key={i.title} club={i} />
      ))}
    </S.CardList>
  );
}

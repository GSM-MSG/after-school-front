import styled from "@emotion/styled";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 4rem;
  column-gap: 2rem;
  margin: 5rem 0;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

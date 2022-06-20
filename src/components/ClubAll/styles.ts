import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 10rem auto 0;
  width: 1386px;

  @media (max-width: 1400px) {
    width: 1036px;
  }
  @media (max-width: 1050px) {
    width: 690px;
  }
  @media (max-width: 700px) {
    max-width: 20rem;
    width: 100%;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Tag = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition: 0.3s;

  ${(props: { active?: boolean }) =>
    props.active ? "background: #5169e8;" : "cursor: pointer; cusour"}
`;

export const Hr = styled.hr`
  border: solid 1px #949494;
`;

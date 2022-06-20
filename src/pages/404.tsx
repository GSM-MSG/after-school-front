/* eslint-disable jsx-a11y/alt-text */
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <Wrapper>
      <Image src="/png/404.png" width={594.8} height={671} />
      <HomeButton onClick={() => router.push("/")}>홈으로</HomeButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const HomeButton = styled.button`
  border: none;
  outline: none;
  font-size: 2rem;
  font-family: inherit;
  font-weight: bold;
  background: #5169e8;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    background: rgba(50, 78, 227);
    transform: scale(1.1);
  }
`;

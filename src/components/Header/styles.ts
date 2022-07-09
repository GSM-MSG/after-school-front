import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0 2rem;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e1e1c;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.a`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Icon = styled.div`
  cursor: pointer;
`;

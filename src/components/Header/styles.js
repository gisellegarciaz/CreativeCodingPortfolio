import styled from "styled-components";

export const GlassHeader = styled.header`
  position: fixed;
  top: ${({ $scrolled }) => ($scrolled ? "16px" : "32px")};
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 30px;
  border-radius: 999px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(50, 8, 85, 0.5);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;
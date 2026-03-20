import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: fixed;
    flex-direction: column;
    top: ${({ $scrolled }) => ($scrolled ? "24px" : "50%")};
    left: 50px;
    transform: ${({ $scrolled }) => 
        $scrolled ? "translateY(0) scale(0.9)" : "translateY(-50%) scale(1)"};
    opacity: 0;
    
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 9000;
    transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
    pointer-events: all;
    color: #000;
`;

export const GlassHeader = styled.div`
  width: ${({ $scrolled }) => ($scrolled ? "54px" : "80px")}; 
  height: ${({ $scrolled }) => ($scrolled ? "54px" : "auto")};
  padding: ${({ $scrolled }) => ($scrolled ? "0" : "30px 10px")};
  
  white-space: nowrap;
  border-radius: 999px;
  backdrop-filter: blur(20px);
  background: ${({ $scrolled }) => ($scrolled ? "rgba(50, 8, 85, 0.8)" : "rgba(255, 255, 255, 0.5)")};
  border: 1px solid rgba(255, 255, 255, 0.12);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    background: rgba(50, 8, 85, 0.5);
    border-color: rgba(138, 43, 226, 0.3);
    transform: scale(1.05);
  }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    opacity: ${({ $scrolled }) => ($scrolled ? "0" : "1")};
    visibility: ${({ $scrolled }) => ($scrolled ? "hidden" : "visible")};
    transition: all 0.3s ease;
`;

export const HamburgerIcon = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 4px;
    opacity: ${({ $scrolled }) => ($scrolled ? "1" : "0")};
    transition: all 0.3s ease;

    span {
        width: 24px;
        height: 2px;
        background: white;
        border-radius: 2px;
    }
`;
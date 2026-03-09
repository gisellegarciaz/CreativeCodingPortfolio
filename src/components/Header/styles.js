import styled, { keyframes } from "styled-components";

/* animação de onda */
const wave = keyframes`
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 40px;
  }
`;

/* animação de desenho do stroke */
const draw = keyframes`
  from {
    stroke-dashoffset: 400;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const GlassHeader = styled.header`
  position: fixed;
  top: ${({ $scrolled }) => ($scrolled ? "16px" : "32px")};
  left: 50%;
  transform: translateX(-50%);

  padding: 14px 40px;

  border-radius: 999px;

  backdrop-filter: blur(20px);
  background: rgba(255,255,255,0.06);

  border: 1px solid rgba(255,255,255,0.12);

  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 26px;
`;

export const NavLink = styled.a`
  position: relative;

  color: #d0c9ff;
  text-decoration: none;

  font-size: 14px;
  font-weight: 500;

  padding: 6px 4px;

  transition: color 0.25s ease;

  &:hover {
    color: white;
  }

  /* ================================= */
  /* HOMEPAGE → RETÂNGULO HAND DRAWN   */
  /* ================================= */

  &:nth-child(1)::before {
    content: "";

    position: absolute;

    left: -10px;
    top: -1px;

    width: calc(100% + 20px);
    height: calc(100% + 20px);

    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 70' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='190' height='60' rx='10' ry='10' stroke='%23a78bfa' stroke-width='3' fill='none' stroke-linecap='round' stroke-dasharray='8 6'/%3E%3C/svg%3E");

    background-repeat: no-repeat;
    background-size: contain;

    opacity: 0;
    transform: scale(0.8);

    transition: all 0.35s ease;
  }

  &:nth-child(1):hover::before {
    opacity: 1;
    transform: scale(1);
  }

  /* ================================= */
  /* DOWNLOAD CV → SUBLINHADO ONDULADO */
  /* ================================= */

  &:nth-child(2)::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -4px;

    width: 100%;
    height: 6px;

    background-image: url("data:image/svg+xml,%3Csvg width='40' height='6' viewBox='0 0 40 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 3 Q5 0 10 3 T20 3 T30 3 T40 3' stroke='%23a78bfa' fill='transparent' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");

    background-repeat: repeat-x;
    background-size: 40px 6px;

    opacity: 0;
    transform: translateY(4px);

    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  &:nth-child(2):hover::after {
    opacity: 1;
    transform: translateY(0);

    animation: ${wave} 1s linear;
  }

  /* ================================= */
  /* PORTFOLIO → NUVEM HAND DRAWN      */
  /* ================================= */

  &:nth-child(3)::before {
    content: "";

    position: absolute;

    left: -30px;
    top: -15px;

    width: calc(100% + 60px);
    height: calc(100% + 54px);

    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 70 Q20 50 40 40 Q50 20 80 35 Q110 10 140 35 Q170 35 170 60 Q170 80 140 80 L60 80 Q40 80 40 70 Z' stroke='%23a78bfa' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");

    background-repeat: no-repeat;
    background-size: contain;

    opacity: 0;
    transform: scale(0.75);

    transition: all 0.35s ease;
  }

  &:nth-child(3):hover::before {
    opacity: 1;
    transform: scale(1);
  }

  /* ================================= */
  /* CONTACT → CÍRCULO HAND DRAWN      */
  /* ================================= */

  &:nth-child(4)::before {
    content: "";

    position: absolute;

    left: -14px;
    top: -8px;

    width: calc(100% + 28px);
    height: calc(100% + 32px);

    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='100' cy='45' rx='90' ry='35' stroke='%23a78bfa' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");

    background-repeat: no-repeat;
    background-size: contain;

    opacity: 0;
    transform: scale(0.75);

    transition: all 0.35s ease;
  }

  &:nth-child(4):hover::before {
    opacity: 1;
    transform: scale(1);
  }
`;
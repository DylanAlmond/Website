import styled, { css } from "styled-components";

const gradientBackground = css`
  background: linear-gradient(
    45deg, 
    ${({ theme }) => theme.color.primary} 0%,
    ${({ theme }) => theme.color.secondary} 33%,
    ${({ theme }) => theme.color.primary} 66%,
    ${({ theme }) => theme.color.secondary} 100%
  );

  animation: placeholderSlide 5s linear infinite;
  background-size: 400% 400%;
`;

export const Wrapper = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  width: 260px;
`;

export const Heading = styled.h1`
  font-size: 96px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${gradientBackground}

  animation: placeholderSlide 5s linear infinite;
  background-size: 400% 400%;
    
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
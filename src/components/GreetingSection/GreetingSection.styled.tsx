import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  width: 260px;
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 96px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    background: linear-gradient(
      90deg, 
      ${theme.color.primary}
      0%,
      ${theme.color.secondary} 
      100%);
      
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `};
`;
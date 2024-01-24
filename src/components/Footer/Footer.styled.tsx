import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 8px;

  /* padding-bottom: 32px; */
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.onSecondary};
    margin-right: auto;
  `};
`;

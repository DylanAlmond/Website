import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  height: 100%;
`;

export const Nav = styled.nav`
 ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;

    a {
      color: ${theme.color.onSecondary};
    }

    .active {
      color: ${theme.color.onPrimary};
    }
  `}
`;
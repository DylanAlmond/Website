import styled, { css } from "styled-components";

export const SocialsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;

    font-size: ${theme.fontSize.lg};
    a {
      color: ${theme.color.onSecondary};
    }
  `}
`;
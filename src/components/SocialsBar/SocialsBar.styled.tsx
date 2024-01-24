import styled, { css } from "styled-components";

export const SocialsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 20px;

    font-size: 20px;
    a {
      color: ${theme.color.onSecondary};
    }
  `}
`;
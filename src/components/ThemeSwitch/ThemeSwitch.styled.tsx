import styled, { css } from "styled-components";

export const Wrapper = styled.label`

`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: 24px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    padding: 0px;

    transition: opacity 0.2s linear;
    color: ${theme.color.onPrimary};

    @media(hover: hover) and (pointer: fine) {
      &:hover {
        opacity: 60%;
      }
    }
  `}
`;
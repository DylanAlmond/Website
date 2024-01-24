import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    /* min-width: 180px; */
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;

    background-color: transparent;
`;

export const Img = styled.img`
  ${({ theme }) => css`
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16/10;

    box-shadow: 0px 0px 20px 0px ${theme.color.shadow};
  `}
`;

export const Title = styled.p`
  font-weight: 500;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.onSecondary}
  `}
`;

export const FeaturedLink = styled.a`
  
`;
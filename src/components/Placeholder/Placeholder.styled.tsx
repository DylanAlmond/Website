import styled, { css } from "styled-components";

const gradientBackground = css`
  background: linear-gradient(
    45deg, 
    ${({ theme }) => theme.color.onSecondary} 0%,
    ${({ theme }) => theme.color.onPrimary} 33%,
    ${({ theme }) => theme.color.onSecondary} 66%,
    ${({ theme }) => theme.color.onPrimary} 100%
  );

  animation: placeholderSlide 5s linear infinite;
  background-size: 400% 400%;
`;

export const Wrapper = styled.div`
    display: flex;
    /* min-width: 180px; */
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;

    background-color: transparent;
`;

export const Image = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16/10;

    ${gradientBackground}

    box-shadow: 0px 0px 20px 0px ${theme.color.shadow};
  `}
`;

export const Title = styled.p`
  height: 14px;
  width: 70%;

  border-radius: 4px;

  ${gradientBackground}
`;

export const Description = styled.p`
  height: 56px;
  width: 100%;

  border-radius: 4px;

  ${gradientBackground}
`;

export const FeaturedLink = styled.a`
  height: 14px;
  width: 50%;

  border-radius: 4px;

  ${gradientBackground}
`;
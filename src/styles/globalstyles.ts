import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      width: 100dvw;
      height: 100dvh;
      overflow: hidden;
    }

    body {
      display: flex;
      flex-direction: column;
      align-items: center;

      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSize.md};
      font-weight: 400;
      line-height: ${theme.lineHeight}; /* 133.333% */
      color: ${theme.color.onPrimary};

      background-color: ${theme.color.background};

      box-sizing: border-box;
      padding: 32px;

      overflow-y: auto;
      overflow-x: hidden;

      transition: background-color 1s;
    }

    #root {
      display: flex;
      flex-direction: column;
      align-items: center;

      flex: 1;
      gap: 48px;
 
      width: 100%;
      max-width: ${theme.breakpoint.md};
    }

    a {
      text-decoration: none;
      transition: opacity 0.2s linear;
      color: ${theme.color.primary};
      line-height: normal;

      @media(hover: hover) and (pointer: fine) {
        &:hover {
          opacity: 60%;
        }
      }
    }

    ul, ol {
      padding-left: 1rem;
    }

    /* Animations */
    @keyframes placeholderSlide {
      0% {
          background-position: 100% 0%
      }
      100% {
          background-position: 15% 100%
      }
    }
  `};
`;

export default GlobalStyle;
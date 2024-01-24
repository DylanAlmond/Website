import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const theme = {
  breakpoint: {
    xs: '320px',
    sm: '600px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },

  device: {
    mobileS: `(max-width: 600px)`,
    mobileL: `(min-width: 600px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 992px)`,
    desktop: `(min-width: 1200px)`,
    desktopLg: `(min-width: 1400px)`,
    desktopXl: `(min-width: 1800px)`
  },

  fontFamily: 'Roboto',
  fontWeight: 400,
  lineHeight: '16px',

  fontSize: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px'
  },
}

export const dark = {
  ...theme,

  color: {
    primary: '#FB2576',
    secondary: '#6F00C8',
    background: '#121212',
    surface: '#171717',
    outline: '#393939',
    onPrimary: '#FFFFFF',
    onSecondary: '#AAAAAA',
    shadow: 'rgba(0, 0, 0, 0)'
  }
}

export const light = {
  ...theme,

  color: {
    primary: '#FF0061',
    secondary: '#6F00C8',
    background: '#FFFFFF',
    surface: '#171717',
    outline: '#393939',
    onPrimary: '#000000',
    onSecondary: '#575757',
    shadow: 'rgba(0, 0, 0, 0.10)'
  }
}
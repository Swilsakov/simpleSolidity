import WebFont from 'webfontloader';
import { css, keyframes } from 'styled-components';

WebFont.load({
  google: {
    families: [
      'Love Ya Like A Sister:400',
      'Knewave:400',
      'Roboto Mono:700,400,500',
      'Anton:400',
      'Montserrat:800,700,500,400',
    ],
  },
});

const colors = {
  red: '#E33152',
  rose: '#FF4079',
  redHover: '#BF1A69',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#999999',
  darkGray: '#555555',
  beige: '#FBC1FC',
  beigeHover: '#f6db9f',
  brown: '#FFB1CD',
  green: '#7CFA6E',
  blue: '#28BFFF',
  lightBlue: '#05C3FF',
  yellow: '#FFF301',
  purple: '#CD05FF',
  yellowHover: '#E6DB00',
  violet: '#C56EFA',
  purpleHover: '#A300CC',
  cyan: '#1CFFF1',
};

const gradientColors = {
  red: css`
    linear-gradient(
      90deg,
      #FF395D 0%,
      #D13DF6 100%
    );
  `,
  violet: css`
    linear-gradient(
      90deg,
      #D630FF 0%,
      #FF62AD 100%
    );
  `,
  yellow: css`
    linear-gradient(
      90deg,
      #FFCC17 0%,
      #FF7E20 100%
    );
  `,
  green: css`
    linear-gradient(
      90deg,
      #20FF51 0%,
      #1AF1FF 100%
    );
  `,
  blue: css`
    linear-gradient(
      90deg,
      #20F2FF 0%,
      #1A83FF 100%
    );
  `,
};

const variants = {
  button: {
    red: {
      bg: colors.red,
      bgHover: colors.redHover,
      shadow: colors.black,
    },
    beige: {
      bg: colors.beige,
      bgHover: colors.beigeHover,
      shadow: colors.green,
    },
    large: css`
      margin-top: 8px;
      margin-right: 8px;
      padding: 16px 0;
      min-height: 64px;

      &::after {
        padding: 16px 0;
        height: calc(100% - 32px);

        top: -8px;
        left: 8px;
      }
      &:active {
        &::after {
          top: -2px;
          left: 2px;
        }
      }
    `,
    medium: css`
      margin-top: 2px;
      margin-right: 4px;
      padding: 8px 0;
      min-height: 48px;

      &::after {
        padding: 8px 0;
        height: calc(100% - 16px);

        top: -4px;
        left: 2px;
      }
      &:active {
        &::after {
          top: -2px;
          left: 1px;
        }
      }
    `,
  },
};

const animations = {
  backgroundRepeat: keyframes`
    0%{background-position:0 82%}
    50%{background-position:100% 19%}
    100%{background-position:0 82%}
  `,
};

const animationPresets = {
  rainbowBackgroundRepeat: css`
    animation: ${animations.backgroundRepeat} 8000ms linear infinite;
    background: linear-gradient(
      150deg,
      #ff0000 12.22%,
      #ffb800 22.48%,
      #ffe600 34.27%,
      #8fff00 46.44%,
      #00f0ff 57.47%,
      #000aff 68.11%,
      #bd00ff 78.38%
    );
    background-size: 150% 150%;
  `,
};

const effects = {
  fontOutline: css`
    -webkit-text-stroke: 0.25px black;
    text-shadow: 0 1px 0 black, 1px 0 0 black, 1px 1px black, 0 -1px 0 black,
      -1px 0 black, -1px -1px 0 black;
  `,
  fontOutlineWhite: css`
    -webkit-text-stroke: 0.25px white;
    text-shadow: 0 1px 0 white, 1px 0 0 white, 1px 1px white, 0 -1px 0 white,
      -1px 0 white, -1px -1px 0 white;
  `,
};

const fonts = {
  knewave: {
    lg: css`
      font-family: Knewave, sans-serif;
      letter-spacing: 1px;
      font-size: 32px;
      line-height: 32px;
    `,
    md: css`
      font-family: Knewave, sans-serif;
      letter-spacing: 1px;
      font-size: 20px;
      line-height: 32px;
    `,
  },
  robotoMono: {
    xl: css`
      font-family: Roboto Mono, sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 36px;
    `,
    lg: css`
      font-family: Roboto Mono, sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;

      @media (max-width: 1000px) {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
      }
    `,
    md: css`
      font-family: Roboto Mono, sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;

      @media (max-width: 1000px) {
        font-weight: 350;
        font-size: 14px;
        line-height: 19px;
      }
    `,
    sm: css`
      font-family: Roboto Mono, sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
    `,
  },
  loveYaLikeASister: {
    lg: css`
      font-family: Love Ya Like A Sister, sans-serif;
      font-size: 80px;
      line-height: 80px;
      letter-spacing: 1px;
      color: ${colors.red};

      @media (max-width: 1000px) {
        font-size: 40px;
        line-height: 40px;
      }
    `,
    md: css`
      font-family: Love Ya Like A Sister, sans-serif;
      font-weight: normal;
      font-size: 36px;
      line-height: 50px;
      letter-spacing: 1px;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 25px;
        line-height: 35px;
      }
    `,
    mdBlack: css`
      font-family: Love Ya Like A Sister, sans-serif;
      font-weight: normal;
      font-size: 36px;
      line-height: 50px;
      letter-spacing: 1px;
      color: ${colors.black};

      @media (max-width: 1000px) {
        font-size: 25px;
        line-height: 35px;
      }
    `,
    sm: css`
      font-family: Love Ya Like A Sister, sans-serif;
      font-weight: normal;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 1px;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 20px;
        line-height: 25px;
      }
    `,
    xsm: css`
      font-family: Love Ya Like A Sister, sans-serif;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 1px;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 22px;
      }
    `,
  },
  anton: {
    h1: css`
      font-family: Anton, sans-serif;
      font-size: 140px;
      line-height: 170px;
      font-weight: 400;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 70px;
        line-height: 90px;
        font-weight: 400;
      }
    `,
    h2: css`
      font-family: Anton, sans-serif;
      font-size: 100px;
      line-height: 120px;
      font-weight: 400;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 60px;
        line-height: 80px;
        font-weight: 400;
      }
    `,
    h2black: css`
      font-family: Anton, sans-serif;
      font-size: 100px;
      line-height: 80px;
      font-weight: 400;
      color: ${colors.black};

      @media (max-width: 1000px) {
        font-size: 60px;
        line-height: 50px;
        font-weight: 400;
      }
    `,
    h3: css`
      font-family: Anton, sans-serif;
      font-size: 60px;
      line-height: 80px;
      font-weight: 400;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 40px;
        line-height: 60px;
        font-weight: 400;
      }
    `,
    h3Black: css`
      font-family: Anton, sans-serif;
      font-size: 60px;
      line-height: 80px;
      font-weight: 400;

      @media (max-width: 1000px) {
        font-size: 40px;
        line-height: 60px;
        font-weight: 400;
      }
    `,
    h4: css`
      font-family: Anton, sans-serif;
      font-size: 40px;
      line-height: 60px;
      font-weight: 400;
      color: ${colors.white};

      @media (max-width: 1000px) {
      }
    `,
  },
  montserrat: {
    b0: css`
      font-family: Montserrat, sans-serif;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 20px;
      }
    `,
    logo: css`
      font-family: Montserrat, sans-serif;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -2px;
      font-weight: 800;
      color: ${colors.white};

      @media (max-width: 1000px) {
      }
    `,
    logoBlack: css`
      font-family: Montserrat, sans-serif;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -2px;
      font-weight: 800;

      @media (max-width: 1000px) {
      }
    `,
    header: css`
      font-family: Montserrat, sans-serif;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
      color: ${colors.white};

      @media (max-width: 1000px) {
      }
    `,
    headerBlack: css`
      font-family: Montserrat, sans-serif;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;

      @media (max-width: 1000px) {
      }
    `,
    article: css`
      font-family: Montserrat, sans-serif;
      font-size: 18px;
      line-height: 32px;
      font-weight: 400;
      text-align: center;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 14px;
        line-height: 32px;
      }
    `,
    b1: css`
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      color: ${colors.white};

      @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
      }
    `,
    b1Black: css`
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;

      @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
      }
    `,
    b2: css`
      font-family: Montserrat, sans-serif;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: ${colors.white};

      @media (max-width: 1000px) {
      }
    `,
    caption: css`
      font-family: Montserrat, sans-serif;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      letter-spacing: 2px;
      color: ${colors.white};

      @media (max-width: 1000px) {
      }
    `,
    captionBlack: css`
      font-family: Montserrat, sans-serif;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      letter-spacing: 2px;

      @media (max-width: 1000px) {
      }
    `,
  },
};

export const theme = {
  colors,
  gradientColors,
  fonts,
  effects,
  variants,
  animations,
  animationPresets,
};

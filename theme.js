// @flow

// TODO: use bootstrap variables convention to allow automating mapping
// TODO: Evaluate this file and generate a new one with just the values.


// 0. Utilities

const CSS_VALUE_REGEX = /([0-9.]+)(\w*)/;

function mult(a: string, b: number): string {
  const details = a.match(CSS_VALUE_REGEX);
  if (!details) {
    return '';
  }

  const result = parseFloat(details[1]) * b;
  return `${result}${details[2]}`;
}


// 1. Colors

const colors = {
  brandDanger: '#d9534f',
  brandInfo: '#5bc0de',
  // brandInverse: this.grayDark,
  brandPrimary: '#0275d8',
  brandSuccess: '#5cb85c',
  brandWarning: '#f0ad4e',
  // gray: '#55595c',
  grayDark: '#373a3c',
  // grayLight: '#818a91',
  grayLighter: '#eceeef',
  grayLightest: '#f7f7f9',
};


// 2. Options

const options = {
  // enableFlex: false,
  enableRounded: true,
  enableShadows: true,
  // enableGradients: false,
  enableTransitions: true,
  enableHoverMediaQuery: false,
  // enableGridClasses: true,
  // enablePrintStyles: true,
};


// 3. Spacing

const spacer = '1rem';
const spacerX = spacer;
const spacerY = spacer;

const spacing = {
  borderWidth: '1px',
  spacer,
  spacerX,
  spacerY,
  spacers: [
    { x: 0, y: 0 },
    { x: mult(spacerX, 0.25), y: mult(spacerY, 0.25) },
    { x: mult(spacerX, 0.5), y: mult(spacerY, 0.5) },
    { x: spacerX, y: spacerY },
    { x: mult(spacerX, 1.5), y: mult(spacerY, 1.5) },
    { x: mult(spacerX, 3), y: mult(spacerY, 3) },
  ],
};


// 4. Body

const body = {
  bodyBg: '#fff',
  bodyColor: colors.grayDark,
  inverseBg: colors.grayDark,
  inverseColor: colors.grayLighter,
};


// 9. Fonts

const fonts = {
  fontSizeBase: '1rem',
  fontSizeLg: '1.25rem',
  fontSizeRoot: '16px',
  fontSizeSm: '.875rem',
  fontSizeXs: '.75rem',
};


// 10. Components

const components = {
  borderRadius: '.25rem',
  borderRadiusLg: '.3rem',
  borderRadiusSm: '.2rem',
};


// 12. Buttons

const buttons = {
  btnActiveBoxShadow: 'inset 0 3px 5px rgba(0,0,0,.125)',
  btnBorderRadius: components.borderRadius,
  btnBorderRadiusLg: components.borderRadiusLg,
  btnBorderRadiusSm: components.borderRadiusSm,
  btnBoxShadow: 'inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075)',
  btnDangerBg: colors.brandDanger,
  btnDangerBorder: colors.brandDanger,
  btnDangerColor: '#fff',
  btnFontSize: fonts.fontSizeBase,
  btnFontSizeLg: fonts.fontSizeLg,
  btnFontSizeSm: fonts.fontSizeSm,
  btnLineHeight: '1.25',
  btnPaddingX: '1rem',
  btnPaddingXLg: '1.5rem',
  btnPaddingXSm: '.5rem',
  btnPaddingY: '.5rem',
  btnPaddingYLg: '.75rem',
  btnPaddingYSm: '.25rem',
  btnInfoBg: colors.brandInfo,
  btnInfoBorder: colors.brandInfo,
  btnInfoColor: '#fff',
  btnPrimaryBg: colors.brandPrimary,
  btnPrimaryBorder: colors.brandPrimary,
  btnPrimaryColor: '#fff',
  btnSecondaryBg: '#fff',
  btnSecondaryBorder: '#ccc',
  btnSecondaryColor: colors.grayDark,
  btnSuccessBg: colors.brandSuccess,
  btnSuccessBorder: colors.brandSuccess,
  btnSuccessColor: '#fff',
  btnWarningBg: colors.brandWarning,
  btnWarningBorder: colors.brandWarning,
  btnWarningColor: '#fff',
};

// 13. Forms

const forms = {
  inputBtnBorderWidth: spacing.borderWidth,
};


// 21. Cards

const cards = {
  cardBg: '#fff',
  cardBorderColor: 'rgba(0, 0, 0, .125)',
  cardBorderRadius: components.borderRadius,
  cardBorderRadiusInner: `calc(#{${components.borderRadius}} - #{1px})`,
  cardBorderWidth: '1px',
  cardCapBg: colors.grayLightest,
  cardColumnsSmUpColumnGap: '1.25rem',
  cardDeckMargin: '.625rem',
  cardImgOverlayPadding: '1.25rem',
  cardLinkHoverColor: '#fff',
  cardSpacerX: '1.25rem',
  cardSpacerY: '.75rem',
};

// Theme

const theme = Object.assign(
  {}, colors, options, spacing, body, fonts, components, buttons, forms, cards,
);

export type Theme = typeof theme;

export default theme;

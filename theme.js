// @flow

import type { ContainerMaxWidths, GridBreakpoints, GridGutterWidths } from './types.js.flow';

import { mult, sum } from './helpers/theme';

// TODO: use bootstrap variables convention to allow automating mapping
// TODO: Evaluate this file and generate a new one with just the values.


// 1. Colors

const colors = {
  brandDanger: '#d9534f',
  brandInfo: '#5bc0de',
  // brandInverse: this.grayDark,
  brandPrimary: '#0275d8',
  brandSuccess: '#5cb85c',
  brandWarning: '#f0ad4e',
  gray: '#55595c',
  grayDark: '#373a3c',
  grayLight: '#818a91',
  grayLighter: '#eceeef',
  grayLightest: '#f7f7f9',
};


// 2. Options

const options = {
  enableFlex: true,
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


// 6. Grid Breakpoints

const gridBreakpoints: { gridBreakpoints: GridBreakpoints } = {
  gridBreakpoints: {
    xs: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};


// 7. Grid Containers

const containerMaxWidths: ContainerMaxWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
};

const gridContainers = {
  containerMaxWidths,
};


// 8. Grid Columns

const gridColumnsBase = {
  gridColumns: 12,
  gridGutterWidthBase: '30px',
};

const gridGutterWidths: GridGutterWidths = {
  xs: gridColumnsBase.gridGutterWidthBase,
  sm: gridColumnsBase.gridGutterWidthBase,
  md: gridColumnsBase.gridGutterWidthBase,
  lg: gridColumnsBase.gridGutterWidthBase,
  xl: gridColumnsBase.gridGutterWidthBase,
};

const gridColumns = Object.assign({}, gridColumnsBase, {
  gridGutterWidths,
});


// 9. Fonts

const fonts = {
  fontSizeBase: '1rem',
  fontSizeLg: '1.25rem',
  fontSizeRoot: '16px',
  fontSizeSm: '.875rem',
  fontSizeXs: '.75rem',
  lineHeightBase: 1.5,
  textMuted: colors.grayLight,
  smallFontSize: '80%',
};


// 10. Components

const components = {
  borderRadius: '.25rem',
  borderRadiusLg: '.3rem',
  borderRadiusSm: '.2rem',
  lineHeightLg: (4.0 / 3.0),
  lineHeightSm: 1.5,
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

const formsBase = {
  cursorDisabled: 'not-allowed',
  customCheckboxIndeterminateIndicatorColor: '#fff',
  customControlCheckedIndicatorColor: '#fff',
  customFileColor: '#555',
  formIconDangerColor: colors.brandDanger,
  formIconSuccessColor: colors.brandSuccess,
  formIconWarningColor: colors.brandWarning,
  inputBg: '#fff',
  inputBorderColor: 'rgba(0, 0, 0, .15)',
  inputBorderFocus: '#66afe9',
  inputBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
  inputColor: colors.gray,
  inputPaddingY: '.5rem',
  inputPaddingYLg: '.75rem',
  inputPaddingYSm: '.25rem',
};

// TODO: Missing custom-select and custom-radio
const forms = Object.assign({}, formsBase, {
  customCheckboxCheckedIcon: `url(
    "data:image/svg+xml;charset=utf8,%3Csvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 8 8'%3E%3Cpath fill='${formsBase.customControlCheckedIndicatorColor}'
      d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E")`,
  customCheckboxIndeterminateBg: '#0074d9',
  customCheckboxIndeterminateBoxShadow: 'none',
  customCheckboxIndeterminateIcon: `url(
    "data:image/svg+xml;charset=utf8,%3Csvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 4 4'%3E%3Cpath stroke='${formsBase.customCheckboxIndeterminateIndicatorColor}'
      d='M0 2h4'/%3E%3C/svg%3E")`,
  customCheckboxRadius: components.borderRadius,
  customControlActiveIndicatorBg: '#84c6ff',
  customControlActiveIndicatorBoxShadow: 'none',
  customControlActiveIndicatorColor: '#fff',
  customControlCheckedIndicatorBg: '#0074d9',
  customControlCheckedIndicatorBoxShadow: 'none',
  customControlDisabledCursor: formsBase.cursorDisabled,
  customControlDisabledDescriptionColor: '#767676',
  customControlDisabledIndicatorBg: '#eee',
  customControlFocusIndicatorBoxShadow: '0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9',
  customControlGutter: '1.5rem',
  customControlIndicatorBg: '#ddd',
  customControlIndicatorBgSize: '50% 50%',
  customControlIndicatorBoxShadow: 'inset 0 .25rem .25rem rgba(0, 0, 0, .1)',
  customControlIndicatorSize: '1rem',
  customControlSpacerX: '1rem',
  customControlSpacerY: '.25rem',
  customFileBg: '#fff',
  customFileBorderColor: '#ddd',
  customFileBorderRadius: components.borderRadius,
  customFileBorderWidth: spacing.borderWidth,
  customFileBoxShadow: 'inset 0 .2rem .4rem rgba(0, 0, 0, .05)',
  customFileButtonBg: '#eee',
  customFileButtonColor: formsBase.customFileColor,
  customFileFocusBoxShadow: '0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9',
  customFileHeight: '2.5rem',
  customFileLineHeight: 1.5,
  customFilePaddingX: '.5rem',
  customFilePaddingY: '1rem',
  customFileText: { buttonLabel: { en: 'Browse' }, placeholder: { en: 'Choose file...' } },
  customFileWidth: '14rem',
  formGroupMarginBottom: spacing.spacerY,
  formIconDanger: `url(
    "data:image/svg+xml;charset=utf8,%3Csvg
      xmlns='http://www.w3.org/2000/svg' fill='${formsBase.formIconDangerColor}'
      viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f'
      d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3'
         r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E")`,
  formIconSuccess: `url(
    "data:image/svg+xml;charset=utf8,%3Csvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 8 8'%3E%3Cpath fill='${formsBase.formIconSuccessColor}'
      d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63
         1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E")`,
  formIconWarning: `url(
    "data:image/svg+xml;charset=utf8,%3Csvg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 8 8'%3E%3Cpath fill='${formsBase.formIconWarningColor}'
      d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04
         7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79
         4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E")`,
  inputBgDisabled: colors.grayLighter,
  inputBgFocus: formsBase.inputBg,
  inputBorderRadius: components.borderRadius,
  inputBorderRadiusLg: components.borderRadiusLg,
  inputBorderRadiusSm: components.borderRadiusSm,
  inputBoxShadowFocus: `${formsBase.inputBoxShadow}, 0, 0, .075), 0 0 8px rgba(${formsBase.inputBorderFocus}, .6)`,
  inputBtnBorderWidth: spacing.borderWidth,
  inputColorFocus: formsBase.inputColor,
  inputColorPlaceholder: '#999',
  inputGroupAddonBg: colors.grayLighter,
  inputGroupAddonBorderColor: formsBase.inputBorderColor,
  inputHeight: sum(
    mult(fonts.fontSizeBase, fonts.lineHeightBase),
    mult(formsBase.inputPaddingY, 2),
  ),
  inputHeightLg: sum(
    mult(fonts.fontSizeLg, components.lineHeightLg),
    mult(formsBase.inputPaddingYLg, 2),
  ),
  inputHeightSm: sum(
    mult(fonts.fontSizeSm, components.lineHeightSm),
    mult(formsBase.inputPaddingYSm, 2),
  ),
  inputLineHeight: '1.25',
  inputPaddingX: '.75rem',
  inputPaddingXLg: '1.5rem',
  inputPaddingXSm: '.5rem',
});


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
  {}, colors, options, spacing, body, gridBreakpoints, gridContainers, gridColumns,
  fonts, components, buttons, forms, cards,
);

export default theme;


export const features = {
  rounded: true,
};

export const main = {
  borderRadius: '.25rem',
  borderRadiusLg: '.3rem',
  borderRadiusSm: '.2rem',
  borderWidth: '1px',
  brandPrimary: '#0275d8',
  fontSizeBase: '1rem',
  fontSizeLg: '1.25rem',
  fontSizeSm: '.875rem',
  fontSizeXs: '.75rem',
  fontSizeRoot: '16px',
};

export const buttons = {
  borderWidth: main.borderWidth,
  large: {
    borderRadius: main.borderRadiusLg,
    fontSize: main.fontSizeLg,
    paddingX: '1.5rem',
    paddingY: '.75rem',
  },
  lineHeight: '1.25',
  normal: {
    borderRadius: main.borderRadius,
    fontSize: main.fontSizeBase,
    paddingX: '1rem',
    paddingY: '.5rem',
  },
  primary: {
    color: '#fff',
    backgroundColor: main.brandPrimary,
    borderColor: main.brandPrimary,
  },
  small: {
    borderRadius: main.borderRadiusSm,
    fontSize: main.fontSizeSm,
    paddingX: '.5rem',
    paddingY: '.25rem',
  },
};

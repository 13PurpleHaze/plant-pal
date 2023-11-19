import colors from './colors';

const general = {
  fontFamily: 'Raleway-Regular',
  fontSize: 16,
  lineHeigth: 18,
  color: colors.text.normal,
};

const fonts = {
  title: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 20,
    lineHeigth: 24,
  },
  smallTitle: {
    fontFamily: 'Raleway-Medium',
    fontSize: 20,
    lineHeigth: 24,
  },
  largeTitle: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 40,
    lineHeigth: 44,
  },
  text: {
    ...general,
  },
  smallText: {
    ...general,
    fontSize: 14,
    lineHeigth: 16,
  },
  extraSmallText: {
    ...general,
    fontSize: 14,
    lineHeigth: 16,
  },
};

export default fonts;

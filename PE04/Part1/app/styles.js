import { StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

/* LIGHT THEME */
const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light,
  },

  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark,
  },
});

/* DARK THEME */
const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark,
  },

  box: {
    ...baseBoxStyles,
    borderColor: Colors.light,
  },
});

/* THEME SWITCHER */
export default function getStyleSheet(useDarkTheme) {
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
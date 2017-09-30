import { StyleSheet } from 'react-native';

const fonts = StyleSheet.create({
  normal: { fontSize: 16 },
  alternate: { fontSize: 50, color: '#FFFFFF'},
  big: { fontSize: 20, alignSelf: 'center'}
});

const globalStyles = StyleSheet.create({
  MarginTop: {
    marginTop: 30
  }
});

const scalingFactors = { normal: 20, big: 10 };

module.exports = { fonts, scalingFactors, globalStyles };

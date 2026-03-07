import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CenterMessage = ({ message }) => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3385ff',
    paddingBottom: 10,
  },
  message: {
    fontSize: 22,
  },
});

export default CenterMessage;
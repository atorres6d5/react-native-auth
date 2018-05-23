/* @flow weak */

import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Button = ({ onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}>
    <Text style={styles.text}>
      {children}
    </Text>
  </TouchableOpacity>
);

export { Button }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  text:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  }
});

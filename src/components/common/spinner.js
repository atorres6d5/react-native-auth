/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const Spinner = ({ size }) => (
  <View style={styles.spinner}>
    <ActivityIndicator size={ size || "large" }/>
  </View>

);

export {Spinner};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});
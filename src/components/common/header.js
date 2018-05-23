/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Header = ({ headerText }) => {
  const { viewStyles, textStyles } = styles

  return (
  <View style={viewStyles}>
    <Text style={textStyles}>{headerText}</Text>
  </View>
);
}



export  { Header }

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.22,
    elevation:2,
    position: "relative"
  },
  textStyles:{
    fontSize: 20,
  }
});

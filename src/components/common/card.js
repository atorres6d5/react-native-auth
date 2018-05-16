/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Card = ( props ) =>{
  return (
    <View style={styles.card}>
      {props.children}
    </View>
  );
}

export { Card }

const styles = StyleSheet.create({
  card: {
    borderWidth:1,
    borderRadius: 2,
    borderBottomWidth: 0,
    borderColor: "#ddd",
    shadowColor:"#000",
    shadowOffset:{"width":0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius:2,
    elevation:1,
    marginLeft:5,
    marginRight:5,
    marginTop:10
  },
});

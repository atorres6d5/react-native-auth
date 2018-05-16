/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const Input = ({label, value, onChangeText, placeHolder, secureTextEntry }) => {


  const { inputStyle, lableStyle, containerStyle} = styles

  return (
    <View style={containerStyle}>
      <Text style={lableStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeHolder={placeHolder}
        // value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
}

export {Input}

const styles = StyleSheet.create({
  inputStyle: {
    color:"#000",
    paddingRight:5,
    paddingLeft:5,
    fontSize:15,
    lineHeight:23,
    flex:2
  },
  lableStyle:{
    fontSize:18,
    paddingLeft:20,
    flex:1
  },
  containerStyle:{
    height:40,
    flex:1,
    flexDirection:"row",
    alignItems:"center"
  }
});

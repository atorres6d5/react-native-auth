import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase"
import { Header } from "./src/components/common"
import LoginForm from "./src/components/LoginForm.js"




export default class App extends React.Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDCep2m5u9mcN7a9zq5i0LnqYWwf1CBDMw",
      authDomain: "auth-udemy-native.firebaseapp.com",
      databaseURL: "https://auth-udemy-native.firebaseio.com",
      projectId: "auth-udemy-native",
      storageBucket: "auth-udemy-native.appspot.com",
      messagingSenderId: "1040642188537"
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

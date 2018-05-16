/* @flow */

import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from "./common"

export default class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:"",
      pass:"",
      err:""
    }
  }

  onButtonPress = () =>{
    const { email, pass } = this.state
    console.log(this.state.email, this.state.pass, "look here");

    firebase.auth().signInWithEmailAndPassword(email, pass)
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch((err)=>{
        console.log("didnot work", err);
        this.setState({err:"Auth Failed"})
      })
    })
  }

  render() {

    return (
      <Card>
        <CardSection>
          <Input
            style = {{ height:20, width:100 }}
            onChangeText={ email => this.setState({ email })}
            value={ this.state.email }
            label="E-Mail"
            placeHolder="john_doe@abc.com"
            secureTextEntry={false}
          />
        </CardSection>

        <CardSection>
          <Input
            style={{ height:20, width:100}}
            onChangeText={ pass => this.setState({ pass })}
            placeHolder="Password"
            label="Password"
            secureTextEntry={true}
            value={this.state.pass}
          />
        </CardSection>
        <Text style={styles.errStyles}>
          {this.state.err}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errStyles: {
    fontSize:20,
    alignSelf:"center",
    color:"red",
  },
});

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
export default class Login extends React.Component {
  render() {
    return (
      <View>
        <Logo/>
        <Form/>
      </View>
    );
  }
}


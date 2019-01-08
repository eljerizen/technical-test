import React from 'react';
import Login from './src/pages/Login';
import { 
        StyleSheet, 
        Text, 
        View, 
        KeyboardAvoidingView 
      } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior ="padding">
          <Login/>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

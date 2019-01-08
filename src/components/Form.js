import React from 'react';
import { 
      StyleSheet, 
      View, 
      Text, 
      TextInput, 
      TouchableHighlight,
      Keyboard
    } from 'react-native';

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  
validateEmail=() =>{
  const {email, password }= this.state;
  if(email == ""){
    this.setState({emailError: 'Please fill the email address'});
    e = false;
  } else{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if (reg.test(email) === false){
      this.setState({emailError: 'not correct format for email address'});
      e = false;
    } else{
      this.setState({emailError: ''});
      e = true;
    }
  }
}

validatePassword=() =>{
  const {email, password }= this.state;
  if(password.trim().length < 6 || password.trim().length > 12){
    this.setState({passwordError: 'please use atleat 6 -12 characters'});
    p = false;
  } else{
    this.setState({passwordError: ''});
    p = true;
  }
}

loginFunction=() =>{
    const {email, password }= this.state;
    var e = false;
    var p = false;

    if(email ==""){
      this.setState({emailError: 'Please fill the email address'});
      e = false;
    } else{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if (reg.test(email) === false){
        this.setState({emailError: 'not correct format for email address'});
        e = false;
      } else{
        this.setState({emailError: ''});
        e = true;
      }
    }

    if(password.trim().length < 6 || password.trim().length > 12){
      this.setState({passwordError: 'please use atleat 6 -12 characters'});
      p = false;
    } else{
      this.setState({passwordError: ''});
      p = true;
    }

    Keyboard.dismiss();
    if(e == true && p == true){
      alert('Success');
    }
  }

  render() {
    return (
      <View style = {styles.container}>

        <Text style = {styles.label}>Email</Text>
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          keyboardType='email-address'
          placeholder = "Email"
          placeholderTextColor = "#d9d9d9"
          autoCapitalize = "none"
          value={this.state.email}
          textContentType="emailAddress"
          onChangeText = {(email) =>{this.setState({email}); this.validateEmail(); }}
          placeholderFontStyle="italic"
        />
        <Text style ={ styles.error }> {this.state.emailError}</Text> 

        <Text style = {styles.label}>Password</Text>
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#d9d9d9"
          autoCapitalize = "none"
          value={this.state.password}
          secureTextEntry={true}
          textContentType="password"
          returnKeyType = "go"
          maxLength ={12}
          //onChangeText = {password =>this.setState({password})}
          onChangeText = {(password) =>{this.setState({password}); this.validatePassword(); }}
       />
        <Text style ={ styles.error }> {this.state.passwordError}</Text> 
      
      <TouchableHighlight 
        style={[styles.buttonContainer, styles.loginButton]} 
        onPress = {this.loginFunction}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableHighlight>
     
    </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
  justifyContent: 'center',
 },

 input: {
  height: 45,
  paddingLeft: 5,
  paddingRight: 5,
  borderColor: '#7d59c0',
  borderWidth: 1,
  borderRadius: 5,
  fontSize: 15,
  fontWeight: 'normal',
  color: '#363636',
 },

 label: {
  color: '#363636',
  fontSize: 20,
  fontWeight: 'bold',
 },

 buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  borderRadius:5,
 },

 loginButton: {
   backgroundColor: "#714db2",
 },

 loginText: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: 20,
 },

 error: {
  color:'red',
  fontSize: 15, 
  fontStyle: 'italic',
}

});
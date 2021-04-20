/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Component } from 'react';
import { SafeAreaView, Text, Alert, Button, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationService } from '../../../common';
 
function LoginScreen() {

  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DSS-A810</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          onChangeText={onChangeText={setEmail}}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={onChangeText={setPassword}}/>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Button style={styles.loginText}
          title="LOGIN"
          onPress={() => signIn({ email, password })}
        />
      </TouchableOpacity>
    </View>
  ) 
};
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  // forgot:{
  //   color:"white",
  //   fontSize:11
  // },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
 });
 
 export default LoginScreen;
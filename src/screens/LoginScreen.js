/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Component } from 'react';
import axios from "axios";
import { SafeAreaView, Alert,View, StyleSheet, TextInput } from 'react-native';
import { ApplicationProvider, Icon, IconRegistry, Input, Button } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

// const StarIcon = () => (
//   <Icon style={styles.icon} fill="#ff0000" name="star"/>
// );


function LoginScreen() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const doLogin = () => {
    const payload = {
      'email':email,
      'password':password
    }

    axios
    .post("http://192.168.50.7:3000/users/login", payload)
    .then(({ data }) => {
      if(data.data.indexOf("아이디") > -1 || data.data.indexOf("패스워드") > -1 ) { // TODO: 로그인 성공 조건 개선 시 변경
        AsyncStorage.setItem('token', '');
        alert(data.data);
      } else {
        saveToken(data.data);
      }
    })
    .catch(e => {  // API 호출이 실패한 경우
      console.error(e);  // 에러표시
      this.setState({  
        loading: false
      });
    });
  }

  const toMainScreen = async () => {
    console.log('toMainScreen')
    navigation.navigate('Main');
    // try {
    //   const myToken = await AsyncStorage.getItem('token');
    //   console.log(myToken)
    //   if(myToken != '') { // 토큰이 있는 경우
    //     console.log('toMain');
    //     // TODO: 메인으로 가자
    //   } else { // 토큰이 없는 경우
    //     console.log('toLogin');
    //     // TODO: 로그인 화면으로 가자
    //   }
    // } catch(e) {
    //   console.error(e);
    // }
  }

  const saveToken = (token) => {
    console.log('saveToken')
    AsyncStorage.setItem('token', token);
    toMainScreen();
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}></ApplicationProvider>
      <View style={{backgroundColor:'#fff'}}>
        <View style={{
          backgroundColor:'purple',
          height:'50%'
        }}/>
        <View style={{
          height:'50%'
        }}>
          <Input
            style={{
              marginLeft:30,
              marginRight:30,
              marginTop:15,
              marginBotton:15,
            }}
            
            placeholder='e-mail'
            value={email}
            onChangeText={nextValue => setEmail(nextValue)}
          />
          <Input
            style={{
              marginLeft:30,
              marginRight:30,
              marginTop:15,
              marginBotton:15,
            }}
            value={password}
            // label='Password'
            placeholder='Password'
            onChangeText={nextValue => setPassword(nextValue)}
          />
          <Button 
            style={{
              margin:30
            }}
            onPress={() => doLogin()}
          >LOGIN</Button>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}>
            <Icon style={styles.icon} fill="#8F9BB3" name="star" />
            <Icon style={styles.icon} fill="#8F9BB3" name="star" />
            <Icon style={styles.icon} fill="#8F9BB3" name="star" />
          </View>
        </View>

        
      </View>
    </>
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
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  },
  button: {
    margin: 2,
  },
  icon : {
    flex: 1,
    width : 32,
    height : 32
  }
});
 
 export default LoginScreen;
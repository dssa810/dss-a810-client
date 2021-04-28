import React from 'react';
import { StyleSheet, View } from 'react-native'
import { ApplicationProvider, Icon, IconRegistry, Input, Button } from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import axios from "axios";
import { observer } from 'mobx-react';
import TokenStore from '../store/tokenStore';
import MainStore from '../store/mainStore';

@observer
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }

  signIn() {
    const { email, password } = this.state;
    // console.log('email', email)
    // console.log('password', password)
    MainStore.setEmail(email);
    MainStore.setPassword(password);
    TokenStore.setToken('myToken');
    this.props.navigation.navigate('Tabs');
    // const payload = {
    //   'email':email,
    //   'password':password
    // }

    // axios
    // .post("http://192.168.50.7:3000/users/login", payload)
    // .then(({ data }) => {
    //   if(data.data.indexOf("아이디") > -1 || data.data.indexOf("패스워드") > -1 ) { // TODO: 로그인 성공 조건 개선 시 변경
    //     // AsyncStorage.setItem('token', '');
    //     TokenStore.token = '';
    //     alert(data.data);
    //   } else {
    //     saveToken(data.data);
    //   }
    // })
    // .catch(e => {  // API 호출이 실패한 경우
    //   console.error(e);  // 에러표시
    //   this.setState({  
    //     loading: false
    //   });
    // });
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <View>
          <IconRegistry icons={EvaIconsPack} />
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
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
              <Input
                style={{
                  marginLeft:30,
                  marginRight:30,
                  marginTop:15,
                  marginBotton:15,
                }}
                value={this.state.password}
                placeholder='Password'
                onChangeText={(password) => this.setState({ password })}
              />
              <Button 
                style={{
                  margin:30
                }}
                onPress={() => this.signIn()}
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
        </View>
      </ApplicationProvider>      
    );
  }
}

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
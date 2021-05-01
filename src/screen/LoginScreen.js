import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import {inject, observer} from 'mobx-react';

import {
  Button,
  Text,
  Divider,
  Layout,
  Input,
  TopNavigation,
} from '@ui-kitten/components';
import common from '../lib/common';
import axios from 'axios';

export const LoginScreen = ({navigation}) => {
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleInputEmail = value => {
    setuserEmail(value);
  };

  const handleInputPassword = value => {
    setUserPassword(value);
  };

  const login = () => {
    axios
      .post(
        'http://ec2-3-34-45-66.ap-northeast-2.compute.amazonaws.com:3000/users/login',
        {
          email: userEmail,
          password: userPassword,
        },
      )
      .then(({data}) => {
        console.log(data);
        if (data.isSuccess === 1) {
          navigation.navigate('Home');
        } else {
          console.log('login fail');
        }
      });
  };

  return (
    <View style={{flex: 1}}>
      <TopNavigation title="로그인" alignment="center" />
      <Divider />
      <Layout level="1">
        <Input
          value={userEmail}
          status="basic"
          placeholder="userId"
          onChangeText={handleInputEmail}
        />
        <Divider />

        <Input
          value={userPassword}
          placeholder="password"
          onChangeText={handleInputPassword}
        />
        <Button onPress={login}>test</Button>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
  },
  image: {
    width: 120,
    height: 120,
  },
});

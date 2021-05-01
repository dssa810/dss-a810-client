import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
const issImage = require('../asset/iss_icon.png');
import {
  Button,
  Text,
  Divider,
  Layout,
  TopNavigation,
} from '@ui-kitten/components';
import * as common from '../lib/common';

export const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      let isLoggined = common.checkUserToken();
      isLoggined ? navigation.navigate('Login') : navigation.navigate('Main');
    }, 5000);
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="로그인" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text} category="h1">
          DSS-A810
        </Text>
        <Image style={styles.image} source={issImage} />
        <Text style={styles.text} category="h5">
          데이터 정거장
        </Text>
      </Layout>
    </SafeAreaView>
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

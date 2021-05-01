/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {observer, useLocalObservable} from 'mobx-react-lite';
import {Text, Layout, ViewPager, Button} from '@ui-kitten/components';
import {useStores} from '../store/Context';

const issImage = require('../asset/iss_icon.png');
const personImage = require('../asset/person.png');

export const HomeScreen = observer(({navigation}) => {
  const {mainStore} = useStores();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndex2, setSelectedIndex2] = React.useState(0);

  useEffect(() => {
    mainStore.mainApi();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, alignItems: 'center'}}>
        <Layout style={{flexDirection: 'row', backgroundColor: '#000'}}>
          <Image source={personImage}></Image>
          <Layout style={{flexDirection: 'column'}}>
            <Text></Text>
          </Layout>
        </Layout>
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <Layout style={styles.tab} level="2">
            <View style={styles.card}>
              <Text category="h5">오늘까지</Text>
              <Text category="h5">{mainStore.main.point} 포인트</Text>
            </View>
          </Layout>
          <Layout style={styles.tab} level="2">
            <View style={styles.card}>
              <Text category="h5">오늘까지</Text>
              <Text category="h5">{mainStore.main.point} 포인트</Text>
            </View>
          </Layout>
          <Layout style={styles.tab} level="2">
            <View style={styles.card}>
              <Text category="h5">오늘까지</Text>
              <Text category="h5">18,820 포인트</Text>
            </View>
          </Layout>
        </ViewPager>
        <Text>매일 임무</Text>
        <ViewPager
          selectedIndex={selectedIndex2}
          onSelect={index => setSelectedIndex2(index)}>
          <Layout style={styles.tab} level="2">
            <View style={styles.card}>
              <Text category="h5">임무1</Text>
              <Text category="h5">티모로 잡기</Text>
            </View>
          </Layout>
          <Layout style={styles.tab} level="2">
            <View style={styles.card}>
              <Text category="h5">임무2</Text>
              <Text category="h5">티모로 잡기</Text>
            </View>
          </Layout>
          <Layout style={styles.tab} level="2">
            <View style={styles.card}>
              <Text category="h5">임무3</Text>
              <Text category="h5">안녕하세요</Text>
            </View>
          </Layout>
        </ViewPager>
        <Text>오늘의 초이스</Text>
      </Layout>
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  container: {},
  imageIcon: {
    width: 10,
    height: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 12,
    margin: 15,
  },
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
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

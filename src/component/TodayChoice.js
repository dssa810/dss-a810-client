import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Text, ListItem} from '@ui-kitten/components';

export const TodayChoice = ({item, index}) => {
  return (
    <ListItem style={{flex: 1}}>
      <Image></Image>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </ListItem>
  );
};
const styles = StyleSheet.create({});

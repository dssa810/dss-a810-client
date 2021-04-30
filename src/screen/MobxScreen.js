import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Icon, Layout, Text} from '@ui-kitten/components';
import {observer} from 'mobx-react';
import {useStores} from '../store/Context';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

export const MobxScreen = observer(({navigation}) => {
  const {authStore, mainStore} = useStores();

  const getMainData = () => {
    console.log('main');
    mainStore.mainApi();
  };

  console.log(authStore.user);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Seconds passed: {}</Text>
      <Button onPress={getMainData}>test</Button>
    </SafeAreaView>
  );
});
